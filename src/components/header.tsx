import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../images/logos/FaviconBase.png";
import MenuRows from "~/images/icons/MenuRows";
import { signIn, signOut, useSession } from "next-auth/react";
import DownArrowSharp from "~/images/icons/DownArrowSharp";

const Header = () => {
    const [unfolded, setUnfolded] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const { data, status } = useSession();

    return (
        <>
            <div className="flex justify-end  bg-stone-900 md:hidden">
                <button
                    onClick={() => {
                        setUnfolded((p) => !p);
                    }}
                    className="my-3 me-3 rounded-sm border-2 border-orange-500 px-2 py-2 text-orange-500 hover:border-orange-600 hover:text-orange-600"
                >
                    <MenuRows />
                </button>
            </div>
            <div>
                <Image
                    className="absolute left-8 top-3 hidden text-red-50 md:inline"
                    src={Logo}
                    alt="diagram"
                    width={42}
                    height={42}
                ></Image>
            </div>
            <div
                className={`flex flex-col  border-b-2 border-b-orange-500 bg-stone-900 transition-all duration-100 md:h-auto md:flex-row  md:justify-end md:overflow-visible md:border-0 md:bg-stone-950 md:text-xl ${
                    unfolded ? "h-52" : "h-0 overflow-hidden"
                }`}
            >
                <Link
                    onClick={() => {
                        setUnfolded(false);
                    }}
                    href="/"
                    className="cursor-pointer border-b-2 border-transparent px-5 py-2 text-stone-200 transition duration-100 hover:bg-orange-600 hover:text-stone-200 md:py-4  md:hover:border-b-2 md:hover:border-b-orange-500 md:hover:bg-stone-950 md:hover:text-orange-600"
                >
                    <div>List Generator</div>
                </Link>
                <Link
                    onClick={() => {
                        setUnfolded(false);
                    }}
                    href="/verb-pairs"
                    className="cursor-pointer border-b-2 border-transparent px-5 py-2 text-stone-200 transition duration-100 hover:bg-orange-600 hover:text-stone-200 md:py-4 md:hover:border-b-2 md:hover:border-b-orange-500 md:hover:bg-stone-950 md:hover:text-orange-600"
                >
                    <div>Verb Pairs</div>
                </Link>
                <Link
                    onClick={() => {
                        setUnfolded(false);
                    }}
                    href="/verb-trees"
                    className="cursor-pointer border-b-2 border-transparent px-5 py-2 text-stone-200 transition duration-100 hover:bg-orange-600 hover:text-stone-200 md:py-4 md:hover:border-b-2 md:hover:border-b-orange-500 md:hover:bg-stone-950 md:hover:text-orange-600"
                >
                    <div>Verb Trees</div>
                </Link>
                <Link
                    onClick={() => {
                        setUnfolded(false);
                    }}
                    href="/tree-model"
                    className="me-0 cursor-pointer border-b-2 border-transparent px-5 py-2 text-stone-200 transition duration-100 hover:bg-orange-600 hover:text-stone-200  md:py-4 md:hover:border-b-2 md:hover:border-b-orange-500 md:hover:bg-stone-950 md:hover:text-orange-600"
                >
                    <div>Tree Model</div>
                </Link>
                <button
                    onClick={() => {
                        status == "authenticated"
                            ? setDropdown((p) => !p)
                            : void signIn();
                    }}
                    className="me-0 cursor-pointer border-b-2  border-transparent px-5 py-2 text-stone-200 transition duration-100 hover:bg-orange-600 hover:text-stone-200 md:me-6 md:py-4 md:hover:border-b-2 md:hover:border-b-orange-500 md:hover:bg-stone-950 md:hover:text-orange-600 "
                >
                    <div className="w-full text-left">
                        {status == "authenticated" ? (
                            <div className="relative w-32 overflow-visible ">
                                <span className=" flex flex-row items-center gap-2 md:justify-center ">
                                    <span>{data.user.name}</span>
                                    <span>
                                        <DownArrowSharp size={12} />
                                    </span>
                                </span>

                                <div
                                    className={`absolute top-full flex w-48 flex-col rounded-sm bg-stone-900 transition-[height] md:left-1/2 md:w-36 md:-translate-x-1/2 md:translate-y-4  ${
                                        dropdown
                                            ? "h-[8.5rem] border-2 border-orange-500"
                                            : "h-0  overflow-hidden "
                                    }`}
                                >
                                    <Link
                                        className="px-2 py-2  text-stone-100 hover:bg-stone-800 hover:text-orange-500"
                                        onClick={() => {
                                            setUnfolded(false);
                                        }}
                                        href={`/saved-lists`}
                                    >
                                        Saved Lists
                                    </Link>
                                    <Link
                                        className=" px-2 py-2  text-stone-100 hover:bg-stone-800 hover:text-orange-500"
                                        href={`/known-words`}
                                        onClick={() => {
                                            setUnfolded(false);
                                        }}
                                    >
                                        Known Words
                                    </Link>
                                    <span
                                        onClick={() => {
                                            void signOut();
                                        }}
                                        className="px-2 py-2  text-stone-100 hover:bg-stone-800 hover:text-orange-500"
                                    >
                                        Sign out
                                    </span>
                                </div>
                            </div>
                        ) : (
                            "Sign In"
                        )}
                    </div>
                </button>
            </div>
        </>
    );
};

export default Header;
