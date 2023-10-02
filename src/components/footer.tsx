import React from "react";
import GitHubIcon from "~/images/icons/GitHub";
import MailIcon from "~/images/icons/Gmail";
import LinkedInIcon from "~/images/icons/LinkedIn";

const Footer = () => {
    return (
        <footer className="mt-auto flex max-h-36 w-full flex-row items-center justify-end gap-3 border-t border-t-stone-800 bg-stone-950 py-8 pe-8 text-stone-100">
            <span className="mx-4 text-sm">Made by Noah Steckley</span>
            <a
                className="hover:text-orange-500"
                href="mailto:Noah3141@gmail.com"
            >
                <MailIcon size={"32px"}></MailIcon>
            </a>
            <a
                className="hover:text-orange-500"
                href="https://github.com/Noah3141"
            >
                <GitHubIcon size={"32px"}></GitHubIcon>
            </a>
            <a
                className="hover:text-orange-500"
                href="https://www.linkedin.com/in/noah-steckley/"
            >
                <LinkedInIcon size={"32px"}></LinkedInIcon>
            </a>
        </footer>
    );
};

export default Footer;
