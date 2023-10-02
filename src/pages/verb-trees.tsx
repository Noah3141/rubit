import React from "react";
import Head from "next/head";
import Link from "next/link";

const VerbTrees = () => {
    return (
        <>
            <Head>
                <title>Tree Model</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <main className="font-main flex min-h-screen bg-stone-950 p-2 pb-16  pt-8 text-xl text-stone-300 sm:flex sm:flex-col sm:items-center sm:p-8">
                <div className="flex max-w-7xl flex-col gap-4 px-4 text-2xl transition-all duration-200">
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/Root"
                            className="hover:text-orange-600"
                        >
                            Root
                        </Link>{" "}
                        (-Branch Imperfective): Prefixes
                    </div>
                    318 Trees
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/писать"
                            className="hover:text-orange-600"
                        >
                            писать
                        </Link>{" "}
                        (-писывать): пред- пере- при- под- над- рас- про- от- о-
                        до- вы- ис- на- за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/вести"
                            className="hover:text-orange-600"
                        >
                            вести
                        </Link>{" "}
                        (-водить): пере- при- об- воз- вз- под- раз- про- от-
                        до- вы- из- на- за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/бить"
                            className="hover:text-orange-600"
                        >
                            бить
                        </Link>{" "}
                        (-бивать): пере- при- об- вз- под- раз- про- от- о- до-
                        вы- из- на- за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/нести"
                            className="hover:text-orange-600"
                        >
                            нести
                        </Link>{" "}
                        (-носить, -нашивать): пере- при- об- воз- под- раз- про-
                        от- до- вы- из- на- за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/бежать"
                            className="hover:text-orange-600"
                        >
                            бежать
                        </Link>{" "}
                        (-бегать): пере- при- вз- под- раз- про- от- о- вы- из-
                        на- за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/рвать"
                            className="hover:text-orange-600"
                        >
                            рвать
                        </Link>{" "}
                        (-рывать): пере- об- вз- под- над- раз- про- пре- от-
                        вы- на- за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/брать"
                            className="hover:text-orange-600"
                        >
                            брать
                        </Link>{" "}
                        (-бирать): пере- при- вз- под- раз- про- от- до- вы- из-
                        на- за- со- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/дать"
                            className="hover:text-orange-600"
                        >
                            дать
                        </Link>{" "}
                        (-давать): пере- при- об- воз- под- раз- про- пре- от-
                        вы- из- за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/смотреть"
                            className="hover:text-orange-600"
                        >
                            смотреть
                        </Link>{" "}
                        (-сматривать): преду- пере- при- об- под- над- рас- про-
                        от- о- до- вы- за- по- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ставить"
                            className="hover:text-orange-600"
                        >
                            ставить
                        </Link>{" "}
                        (-ставлять): пред- пере- при- об- под- рас- от- о- до-
                        вы- на- за- по- со- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/тянуть"
                            className="hover:text-orange-600"
                        >
                            тянуть
                        </Link>{" "}
                        (-тягивать): пере- при- об- под- рас- про- от- до- вы-
                        на- за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/нять"
                            className="hover:text-orange-600"
                        >
                            нять
                        </Link>{" "}
                        (-нимать), ять (-имать): пере- при- обо- об- под- раз-
                        от- до- вы- на- за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/плыть"
                            className="hover:text-orange-600"
                        >
                            плыть
                        </Link>{" "}
                        (-плывать): пере- при- вс- под- рас- про- от- о- до- вы-
                        на- за- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/мыть"
                            className="hover:text-orange-600"
                        >
                            мыть
                        </Link>{" "}
                        (-мывать): пере- об- вз- под- раз- про- от- о- до- вы-
                        из- на- за- с- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/гнать"
                            className="hover:text-orange-600"
                        >
                            гнать
                        </Link>{" "}
                        (-гонять): пере- об- под- раз- про- от- до- вы- из- на-
                        за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/сыпать"
                            className="hover:text-orange-600"
                        >
                            сыпать
                        </Link>{" "}
                        (-сыпать): пере- при- об- под- рас- про- от- о- вы- на-
                        за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/лить"
                            className="hover:text-orange-600"
                        >
                            лить
                        </Link>{" "}
                        (-ливать): пере- при- об- под- раз- про- от- до- вы- из-
                        на- за- по- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/говорить"
                            className="hover:text-orange-600"
                        >
                            говорить
                        </Link>{" "}
                        (-говаривать): пере- при- об- под- раз- про- от- о- до-
                        вы- на- за- по- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/класть"
                            className="hover:text-orange-600"
                        >
                            класть
                        </Link>{" "}
                        (-кладывать), *ложить (-лагать): пере- при- об- под-
                        рас- про- от- до- вы- на- за- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/лететь"
                            className="hover:text-orange-600"
                        >
                            лететь
                        </Link>{" "}
                        (-летать, -лётывать): пере- при- об- вз- под- раз- про-
                        до- вы- на- за- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ступить"
                            className="hover:text-orange-600"
                        >
                            ступить
                        </Link>{" "}
                        (-ступать): пере- при- об- под- рас- про- пре- от- вы-
                        на- за- по- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/садить"
                            className="hover:text-orange-600"
                        >
                            садить
                        </Link>{" "}
                        (-саживать): пере- под- над- рас- про- от- о- вы- на-
                        за- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/шить"
                            className="hover:text-orange-600"
                        >
                            шить
                        </Link>{" "}
                        (-шивать): пере- при- об- под- рас- про- от- вы- на- за-
                        с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/строить"
                            className="hover:text-orange-600"
                        >
                            строить
                        </Link>{" "}
                        (-страивать): пере- при- об- под- над- рас- от- до- вы-
                        на- за- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/делать"
                            className="hover:text-orange-600"
                        >
                            делать
                        </Link>{" "}
                        (-делывать): пере- при- об- воз- под- раз- про- от- до-
                        вы- за- по- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/править"
                            className="hover:text-orange-600"
                        >
                            править
                        </Link>{" "}
                        (-правлять): пере- при- под- рас- от- о- ис- на- за- по-
                        с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/жить"
                            className="hover:text-orange-600"
                        >
                            жить
                        </Link>{" "}
                        (-живать): при- об- под- про- от- о- до- вы- из- на- за-
                        по- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/копать"
                            className="hover:text-orange-600"
                        >
                            копать
                        </Link>{" "}
                        (-капывать): пере- при- вс- под- рас- про- от- о- до-
                        вы- на- за- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/валить"
                            className="hover:text-orange-600"
                        >
                            валить
                        </Link>{" "}
                        (-валивать): пере- при- об- вз- раз- про- от- вы- на-
                        за- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/пасть"
                            className="hover:text-orange-600"
                        >
                            пасть
                        </Link>{" "}
                        (-падать): пере- при- под- рас- про- от- о- вы- на- за-
                        по- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/пустить"
                            className="hover:text-orange-600"
                        >
                            пустить
                        </Link>{" "}
                        (-пускать): под- рас- про- от- о- до- вы- ис- на- за- с-
                        в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/таскать"
                            className="hover:text-orange-600"
                        >
                            таскать{" "}
                        </Link>
                        , тащить (-таскивать): пере- при- под- рас- про- от- вы-
                        на- за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/варить"
                            className="hover:text-orange-600"
                        >
                            варить
                        </Link>{" "}
                        (-варивать): пере- при- об- раз- ото- от- до- вы- на-
                        за- с- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/хватать"
                            className="hover:text-orange-600"
                        >
                            хватать
                        </Link>{" "}
                        (-хватывать): пере- при- об- под- рас- от- о- вы- за-
                        по- с- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/кусать"
                            className="hover:text-orange-600"
                        >
                            кусать
                        </Link>{" "}
                        (-кусывать): пере- при- об- под- над- рас- про- от- вы-
                        за- по- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/работать"
                            className="hover:text-orange-600"
                        >
                            работать
                        </Link>{" "}
                        (-рабатывать): пере- при- об- под- раз- про- от- до- вы-
                        на- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/кидать"
                            className="hover:text-orange-600"
                        >
                            кидать
                        </Link>{" "}
                        (-кидывать): пере- при- вс- под- рас- от- о- до- вы- на-
                        за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/катать"
                            className="hover:text-orange-600"
                        >
                            катать
                        </Link>{" "}
                        (-катывать): пере- об- под- рас- про- от- о- вы- на- за-
                        с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/менить"
                            className="hover:text-orange-600"
                        >
                            менить
                        </Link>{" "}
                        (-менять): пере- при- об- под- раз- про- от- из- за- по-
                        с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/воротить"
                            className="hover:text-orange-600"
                        >
                            воротить
                        </Link>{" "}
                        (-ворачивать): пере- об- под- раз- про- от- вы- из- на-
                        за- по- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/колоть"
                            className="hover:text-orange-600"
                        >
                            колоть
                        </Link>{" "}
                        (-калывать): при- под- над- рас- про- от- вы- на- за-
                        по- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/расти"
                            className="hover:text-orange-600"
                        >
                            расти
                        </Link>{" "}
                        (-растать): пере- при- об- воз- под- раз- про- вы- на-
                        за- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ехать"
                            className="hover:text-orange-600"
                        >
                            ехать
                        </Link>{" "}
                        (*) ездить (-езжать): пере- при- подъ- разъ- про- отъ-
                        до- вы- на- за- съ- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/вертеть"
                            className="hover:text-orange-600"
                        >
                            вертеть
                        </Link>{" "}
                        (-вёртывать): пере- при- об- под- раз- вы- на- за- по-
                        с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/читать"
                            className="hover:text-orange-600"
                        >
                            читать
                        </Link>{" "}
                        (-читывать): пере- при- про- от- до- вы- на- за- по- с-
                        в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/качать"
                            className="hover:text-orange-600"
                        >
                            качать
                        </Link>{" "}
                        (-качивать): пере- под- рас- про- от- вы- на- за- по- с-
                        в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/глядеть"
                            className="hover:text-orange-600"
                        >
                            глядеть
                        </Link>{" "}
                        (-глядывать): пере- при- вз- под- раз- про- о- до- вы-
                        за- по- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/скочить"
                            className="hover:text-orange-600"
                        >
                            скочить
                        </Link>{" "}
                        (-скакивать): пере- при- об- под- про- от- до- вы- на-
                        за- со- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/мотать"
                            className="hover:text-orange-600"
                        >
                            мотать
                        </Link>{" "}
                        (-матывать): пере- об- раз- про- от- вы- из- на- за- с-
                        у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/клеить"
                            className="hover:text-orange-600"
                        >
                            клеить
                        </Link>{" "}
                        (-клеивать): пере- при- об- под- рас- про- о- на- за- с-
                        в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/искать"
                            className="hover:text-orange-600"
                        >
                            искать
                        </Link>{" "}
                        (-искивать): при- вы- за- по- об- вз- под- раз- от- из-
                        с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/крыть"
                            className="hover:text-orange-600"
                        >
                            крыть
                        </Link>{" "}
                        (-крывать): пере- при- вс- рас- от- на- за- по- со- с-
                        у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/везти"
                            className="hover:text-orange-600"
                        >
                            везти
                        </Link>{" "}
                        (-возить): пере- при- под- раз- про- от- вы- за- с- в-
                        у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/звать"
                            className="hover:text-orange-600"
                        >
                            звать
                        </Link>{" "}
                        (-зывать): при- об- под- про- от- вы- на- за- по- со- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/быть"
                            className="hover:text-orange-600"
                        >
                            быть
                        </Link>{" "}
                        (-бывать): пере- при- пре- от- до- вы- из- за- по- с- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/казать"
                            className="hover:text-orange-600"
                        >
                            казать
                        </Link>{" "}
                        (-казывать): преду- при- от- о- до- вы- на- за- по- с-
                        у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/гибать"
                            className="hover:text-orange-600"
                        >
                            гибать
                        </Link>{" "}
                        (-гибать): пере- при- раз- про- о- вы- из- на- за- по-
                        с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/двигать"
                            className="hover:text-orange-600"
                        >
                            двигать
                        </Link>{" "}
                        (-двигать): пере- при- воз- раз- про- ото- вы- на- за-
                        по- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/дёргать"
                            className="hover:text-orange-600"
                        >
                            дёргать
                        </Link>{" "}
                        (-дёргивать): пере- об- вз- под- раз- от- о- вы- за- по-
                        с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/курить"
                            className="hover:text-orange-600"
                        >
                            курить
                        </Link>{" "}
                        (-куривать): пере- при- под- рас- про- о- до- вы- за-
                        по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/пить"
                            className="hover:text-orange-600"
                        >
                            пить
                        </Link>{" "}
                        (-пивать): пере- рас- про- от- до- вы- ис- за- по- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/гладить"
                            className="hover:text-orange-600"
                        >
                            гладить
                        </Link>{" "}
                        (-глаживать): при- раз- от- о- вы- на- за- по- с- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/толкать"
                            className="hover:text-orange-600"
                        >
                            толкать
                        </Link>{" "}
                        (-талкивать): под- рас- про- от- до- вы- на- за- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/мазать"
                            className="hover:text-orange-600"
                        >
                            мазать
                        </Link>{" "}
                        (-мазывать): об- под- раз- про- от- вы- на- за- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/бросать"
                            className="hover:text-orange-600"
                        >
                            бросать
                        </Link>{" "}
                        (-брасывать): пере- вз- под- раз- от- вы- на- за- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/тереть"
                            className="hover:text-orange-600"
                        >
                            тереть
                        </Link>{" "}
                        (-тирать): об- рас- про- от- вы- на- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/вить"
                            className="hover:text-orange-600"
                        >
                            вить
                        </Link>{" "}
                        (-вивать): пере- при- об- вз- раз- из- на- за- с- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/жать"
                            className="hover:text-orange-600"
                        >
                            жать
                        </Link>{" "}
                        (-жимать): при- под- раз- от- вы- на- за- по- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ходить"
                            className="hover:text-orange-600"
                        >
                            ходить{" "}
                        </Link>
                        , идти (-ходить, -хаживать): об- рас- про- от- о- вы-
                        ис- за- по- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/печатать"
                            className="hover:text-orange-600"
                        >
                            печатать
                        </Link>{" "}
                        (-печатывать): пере- при- над- рас- от- о- до- за- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/махать"
                            className="hover:text-orange-600"
                        >
                            махать
                        </Link>{" "}
                        (-махивать): пере- об- вз- под- раз- от- на- по- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/таить"
                            className="hover:text-orange-600"
                        >
                            таить
                        </Link>{" "}
                        (-таивать): под- про- от- до- вы- ис- за- с- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/прыгать"
                            className="hover:text-orange-600"
                        >
                            прыгать
                        </Link>{" "}
                        (-прыгивать): пере- при- вс- под- от- вы- за- по- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/местить"
                            className="hover:text-orange-600"
                        >
                            местить
                        </Link>{" "}
                        (-мещать): пере- воз- раз- вы- за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/жечь"
                            className="hover:text-orange-600"
                        >
                            жечь
                        </Link>{" "}
                        (-жигать): при- об- воз- под- раз- про- вы- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ползти"
                            className="hover:text-orange-600"
                        >
                            ползти
                        </Link>{" "}
                        (-ползать): под- рас- от- вы- на- за- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/слать"
                            className="hover:text-orange-600"
                        >
                            слать
                        </Link>{" "}
                        (-сылать): пере- при- рас- от- вы- на- за- по- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/мешать"
                            className="hover:text-orange-600"
                        >
                            мешать
                        </Link>{" "}
                        (-мешивать): пере- при- под- раз- вы- за- по- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/дуть"
                            className="hover:text-orange-600"
                        >
                            дуть
                        </Link>{" "}
                        (-дувать): об- вз- под- раз- про- от- вы- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/колотить"
                            className="hover:text-orange-600"
                        >
                            колотить
                        </Link>{" "}
                        (-колачивать): при- от- о- вы- за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/точить"
                            className="hover:text-orange-600"
                        >
                            точить
                        </Link>{" "}
                        (-тачивать): об- под- про- от- вы- на- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/красить"
                            className="hover:text-orange-600"
                        >
                            красить
                        </Link>{" "}
                        (-крашивать): пере- при- под- рас- о- до- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/платить"
                            className="hover:text-orange-600"
                        >
                            платить
                        </Link>{" "}
                        (-плачивать): пере- при- от- о- до- вы- с- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/полнить"
                            className="hover:text-orange-600"
                        >
                            полнить
                        </Link>{" "}
                        (-полнять): пере- вос- до- вы- ис- на- за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/сеять"
                            className="hover:text-orange-600"
                        >
                            сеять
                        </Link>{" "}
                        (-сеивать): рас- про- от- вы- на- за- по- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/держать"
                            className="hover:text-orange-600"
                        >
                            держать
                        </Link>{" "}
                        (-держивать): при- воз- под- о- вы- за- с- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/есть"
                            className="hover:text-orange-600"
                        >
                            есть
                        </Link>{" "}
                        (-едать): об- разъ- про- до- за- по- съ- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/хлестать"
                            className="hover:text-orange-600"
                        >
                            хлестать
                        </Link>{" "}
                        (-хлёстывать): пере- об- под- о- вы- на- за- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/разить"
                            className="hover:text-orange-600"
                        >
                            разить
                        </Link>{" "}
                        (-ражать): воз- под- раз- от- вы- за- по- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/пихать"
                            className="hover:text-orange-600"
                        >
                            пихать
                        </Link>{" "}
                        (-пихивать): рас- про- от- вы- на- за- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/купить"
                            className="hover:text-orange-600"
                        >
                            купить
                        </Link>{" "}
                        (-купать): под- рас- о- вы- ис- за- по- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ложить"
                            className="hover:text-orange-600"
                        >
                            ложить
                        </Link>{" "}
                        (-лаживать): пере- при- под- раз- от- на- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/верить"
                            className="hover:text-orange-600"
                        >
                            верить
                        </Link>{" "}
                        (-верять): про- до- за- по- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/просить"
                            className="hover:text-orange-600"
                        >
                            просить
                        </Link>{" "}
                        (-прашивать): о- до- вы- ис- за- с- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/сушить"
                            className="hover:text-orange-600"
                        >
                            сушить
                        </Link>{" "}
                        (-сушивать): об- под- про- о- до- вы- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/гадать"
                            className="hover:text-orange-600"
                        >
                            гадать
                        </Link>{" "}
                        (-гадывать): преду- раз- от- вы- на- за- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/топтать"
                            className="hover:text-orange-600"
                        >
                            топтать
                        </Link>{" "}
                        (-таптывать): рас- про- о- вы- за- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/учить"
                            className="hover:text-orange-600"
                        >
                            учить
                        </Link>{" "}
                        (-учивать): пере- вс- раз- от- до- вы- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ладить"
                            className="hover:text-orange-600"
                        >
                            ладить
                        </Link>{" "}
                        (-лаживать): пере- при- под- раз- от- на- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/кричать"
                            className="hover:text-orange-600"
                        >
                            кричать
                        </Link>{" "}
                        (-крикивать): пере- при- вс- под- о- вы- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/морозить"
                            className="hover:text-orange-600"
                        >
                            морозить
                        </Link>{" "}
                        (-мораживать): пере- при- под- раз- вы- на- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/мести"
                            className="hover:text-orange-600"
                        >
                            мести
                        </Link>{" "}
                        (-метать): вз- под- раз- от- вы- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ключить"
                            className="hover:text-orange-600"
                        >
                            ключить
                        </Link>{" "}
                        (-ключать): пере- под- от- вы- ис- за- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/сечь"
                            className="hover:text-orange-600"
                        >
                            сечь
                        </Link>{" "}
                        (-секать): пере- под- рас- пре- от- вы- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/плести"
                            className="hover:text-orange-600"
                        >
                            плести
                        </Link>{" "}
                        (-плетать): пере- рас- о- за- с- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/влечь"
                            className="hover:text-orange-600"
                        >
                            влечь
                        </Link>{" "}
                        (-влекать): при- раз- от- из- на- за- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/волочь"
                            className="hover:text-orange-600"
                        >
                            волочь
                        </Link>{" "}
                        (-волакивать): при- об- под- до- вы- за- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/следовать"
                            className="hover:text-orange-600"
                        >
                            следовать
                        </Link>{" "}
                        (-следовать): об- рас- про- пре- ис- на- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/винтить"
                            className="hover:text-orange-600"
                        >
                            винтить
                        </Link>{" "}
                        (-винчивать): вз- от- вы- на- за- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/стучать"
                            className="hover:text-orange-600"
                        >
                            стучать
                        </Link>{" "}
                        (-стукивать): пере- при- об- про- от- вы- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/чесать"
                            className="hover:text-orange-600"
                        >
                            чесать
                        </Link>{" "}
                        (-чесывать): при- рас- про- вы- за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/творить"
                            className="hover:text-orange-600"
                        >
                            творить
                        </Link>{" "}
                        (-творять): рас- пре- о- вы- за- со-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/бавить"
                            className="hover:text-orange-600"
                        >
                            бавить
                        </Link>{" "}
                        (-бавлять): при- раз- до- из- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/питать"
                            className="hover:text-orange-600"
                        >
                            питать
                        </Link>{" "}
                        (-питывать): вос- под- про- на- за- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/дохнуть"
                            className="hover:text-orange-600"
                        >
                            дохнуть
                        </Link>{" "}
                        (-дыхать): вз- от- вы- за- по- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/жарить"
                            className="hover:text-orange-600"
                        >
                            жарить
                        </Link>{" "}
                        (-жаривать): об- под- про- до- на- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/яснить"
                            className="hover:text-orange-600"
                        >
                            яснить
                        </Link>{" "}
                        (-яснять): объ- разъ- про- вы- по- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/мочить"
                            className="hover:text-orange-600"
                        >
                            мочить
                        </Link>{" "}
                        (-мачивать): раз- от- вы- на- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/глотать"
                            className="hover:text-orange-600"
                        >
                            глотать
                        </Link>{" "}
                        (-глатывать), *глотить (-глощать): про- за- с- по- пере-
                        на-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/мереть"
                            className="hover:text-orange-600"
                        >
                            мереть
                        </Link>{" "}
                        (-мирать): об- от- вы- за- по- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/лезть"
                            className="hover:text-orange-600"
                        >
                            лезть
                        </Link>{" "}
                        (-лезать) лазить (-лазать): пере- про- вы- за- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/лизать"
                            className="hover:text-orange-600"
                        >
                            лизать
                        </Link>{" "}
                        (-лизывать): при- об- под- вы- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ровнять"
                            className="hover:text-orange-600"
                        >
                            ровнять
                        </Link>{" "}
                        (-равнивать): при- под- раз- вы- с- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/черкать"
                            className="hover:text-orange-600"
                        >
                            черкать
                        </Link>{" "}
                        (-чёркивать): пере- под- над- про- вы- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/пугать"
                            className="hover:text-orange-600"
                        >
                            пугать
                        </Link>{" "}
                        (-пугивать): при- вс- рас- от- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/метить"
                            className="hover:text-orange-600"
                        >
                            метить
                        </Link>{" "}
                        (-мечать): при- под- от- на- за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/гореть"
                            className="hover:text-orange-600"
                        >
                            гореть
                        </Link>{" "}
                        (-горать): воз- раз- до- вы- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/грести"
                            className="hover:text-orange-600"
                        >
                            грести
                        </Link>{" "}
                        (-гребать): под- раз- вы- за- по- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/манить"
                            className="hover:text-orange-600"
                        >
                            манить
                        </Link>{" "}
                        (-манивать): пере- при- под- вы- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/грузить"
                            className="hover:text-orange-600"
                        >
                            грузить
                        </Link>{" "}
                        (-гружать): пере- раз- вы- на- за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/селить"
                            className="hover:text-orange-600"
                        >
                            селить
                        </Link>{" "}
                        (-селять): пере- рас- вы- на- за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/звонить"
                            className="hover:text-orange-600"
                        >
                            звонить
                        </Link>{" "}
                        (-званивать): пере- об- до- на- по- со-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/деть"
                            className="hover:text-orange-600"
                        >
                            деть
                        </Link>{" "}
                        (-девать): воз- под- раз- о- из- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/путать"
                            className="hover:text-orange-600"
                        >
                            путать
                        </Link>{" "}
                        (-путывать): рас- о- вы- за- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/трясти"
                            className="hover:text-orange-600"
                        >
                            трясти
                        </Link>{" "}
                        (-тряхивать): пере- вс- о- вы- по- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/родить"
                            className="hover:text-orange-600"
                        >
                            родить
                        </Link>{" "}
                        (-рождать): пере- воз- вы- на- за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/стегать"
                            className="hover:text-orange-600"
                        >
                            стегать
                        </Link>{" "}
                        (-стёгивать): при- под- рас- от- на- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/совать"
                            className="hover:text-orange-600"
                        >
                            совать
                        </Link>{" "}
                        (-совывать): под- рас- про- вы- за- в-
                    </div>
                    <div className="hover:text-stone-50">
                        -
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/вратить"
                            className="hover:text-orange-600"
                        >
                            вратить
                        </Link>{" "}
                        (-вращать): воз- раз- пре- от- из- со-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/мерить"
                            className="hover:text-orange-600"
                        >
                            мерить
                        </Link>{" "}
                        (-мерять): при- от- вы- из- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/косить"
                            className="hover:text-orange-600"
                        >
                            косить
                        </Link>{" "}
                        (-кашивать): пере- под- о- вы- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/служить"
                            className="hover:text-orange-600"
                        >
                            служить
                        </Link>{" "}
                        (-служивать): при- об- от- за- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/крепить"
                            className="hover:text-orange-600"
                        >
                            крепить
                        </Link>{" "}
                        (-креплять): при- под- за- с- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/лечить"
                            className="hover:text-orange-600"
                        >
                            лечить
                        </Link>{" "}
                        (-лечивать): под- до- вы- из- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/нюхать"
                            className="hover:text-orange-600"
                        >
                            нюхать
                        </Link>{" "}
                        (-нюхивать): об- раз- вы- за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/явить"
                            className="hover:text-orange-600"
                        >
                            явить
                        </Link>{" "}
                        (-являть): предъ- объ- про- вы- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ведать"
                            className="hover:text-orange-600"
                        >
                            ведать
                        </Link>{" "}
                        (-ведывать): раз- про- от- вы- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/метать"
                            className="hover:text-orange-600"
                        >
                            метать
                        </Link>{" "}
                        (-мётывать): вз- раз- вы- на- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/черпать"
                            className="hover:text-orange-600"
                        >
                            черпать
                        </Link>{" "}
                        (-черпывать): от- вы- ис- за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/делить"
                            className="hover:text-orange-600"
                        >
                            делить
                        </Link>{" "}
                        (-делять): раз- от- вы- на- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/хлопать"
                            className="hover:text-orange-600"
                        >
                            хлопать
                        </Link>{" "}
                        (-хлопывать): при- под- о- за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/гнить"
                            className="hover:text-orange-600"
                        >
                            гнить
                        </Link>{" "}
                        (-гнивать): под- до- из- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/плескать"
                            className="hover:text-orange-600"
                        >
                            плескать
                        </Link>{" "}
                        (-плёскивать): вс- рас- о- вы- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/швырнуть"
                            className="hover:text-orange-600"
                        >
                            швырнуть
                        </Link>{" "}
                        (-швыривать): рас- от- вы- за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ждать"
                            className="hover:text-orange-600"
                        >
                            ждать
                        </Link>{" "}
                        (-жидать): пере- под- о- до- вы-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ткнуть"
                            className="hover:text-orange-600"
                        >
                            ткнуть
                        </Link>{" "}
                        (-тыкать): про- на- за- в- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/сохнуть"
                            className="hover:text-orange-600"
                        >
                            сохнуть
                        </Link>{" "}
                        (-сыхать): пере- про- вы- за- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/мять"
                            className="hover:text-orange-600"
                        >
                            мять
                        </Link>{" "}
                        (-минать): пере- под- раз- по- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/стоить"
                            className="hover:text-orange-600"
                        >
                            стоить
                        </Link>{" "}
                        (-стаивать): про- от- вы- на- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/сесть"
                            className="hover:text-orange-600"
                        >
                            сесть
                        </Link>{" "}
                        (-седать): при- вос- о- на- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/греть"
                            className="hover:text-orange-600"
                        >
                            греть
                        </Link>{" "}
                        (-гревать): при- обо- про- на- со-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/прятать"
                            className="hover:text-orange-600"
                        >
                            прятать
                        </Link>{" "}
                        (-прятывать): пере- при- за- с- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/жевать"
                            className="hover:text-orange-600"
                        >
                            жевать
                        </Link>{" "}
                        (-жёвывать): пере- раз- про- до- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/помнить"
                            className="hover:text-orange-600"
                        >
                            помнить
                        </Link>{" "}
                        (-поминать): при- вс- на- за- у-
                    </div>
                    <div className="hover:text-stone-50">
                        -
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/прячь"
                            className="hover:text-orange-600"
                        >
                            прячь
                        </Link>{" "}
                        (-прягать): рас- на- за- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/пытать"
                            className="hover:text-orange-600"
                        >
                            пытать
                        </Link>{" "}
                        (-пытывать): до- вы- ис- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/плясать"
                            className="hover:text-orange-600"
                        >
                            плясать
                        </Link>{" "}
                        (-плясывать): при- под- от- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/царапать"
                            className="hover:text-orange-600"
                        >
                            царапать
                        </Link>{" "}
                        (-царапывать): рас- про- вы- ис-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/клонить"
                            className="hover:text-orange-600"
                        >
                            клонить
                        </Link>{" "}
                        (-клонять): пре- от- на- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/тратить"
                            className="hover:text-orange-600"
                        >
                            тратить
                        </Link>{" "}
                        (-трачивать): рас- ис- за- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/брить"
                            className="hover:text-orange-600"
                        >
                            брить
                        </Link>{" "}
                        (-бривать): от- о- вы- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/болтать"
                            className="hover:text-orange-600"
                        >
                            болтать
                        </Link>{" "}
                        (-балтывать): вз- вы- на- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/спросить"
                            className="hover:text-orange-600"
                        >
                            спросить
                        </Link>{" "}
                        (-спрашивать): пере- рас- вы- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/купорить"
                            className="hover:text-orange-600"
                        >
                            купорить
                        </Link>{" "}
                        (-купоривать): рас- от- за- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/числить"
                            className="hover:text-orange-600"
                        >
                            числить
                        </Link>{" "}
                        (-числять): пере- при- вы- ис-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/готовить"
                            className="hover:text-orange-600"
                        >
                            готовить
                        </Link>{" "}
                        (-готовлять): при- под- из- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/целить"
                            className="hover:text-orange-600"
                        >
                            целить
                        </Link>{" "}
                        (-целять (целый), -целивать (цель)): при- вы- на- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/кончить"
                            className="hover:text-orange-600"
                        >
                            кончить
                        </Link>{" "}
                        (-канчивать): при- о- до- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/трогать"
                            className="hover:text-orange-600"
                        >
                            трогать
                        </Link>{" "}
                        (-трагивать, -трогивать): при- до- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/парить"
                            className="hover:text-orange-600"
                        >
                            парить
                        </Link>{" "}
                        (-паривать): про- вы- за- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/брызгать"
                            className="hover:text-orange-600"
                        >
                            брызгать
                        </Link>{" "}
                        (-брызгивать): раз- о- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/теснить"
                            className="hover:text-orange-600"
                        >
                            теснить
                        </Link>{" "}
                        (-теснять): при- от- вы- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/кутать"
                            className="hover:text-orange-600"
                        >
                            кутать
                        </Link>{" "}
                        (-кутывать): рас- о- за- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/лежать"
                            className="hover:text-orange-600"
                        >
                            лежать
                        </Link>{" "}
                        (-лёживать): раз- про- от- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/клевать"
                            className="hover:text-orange-600"
                        >
                            клевать
                        </Link>{" "}
                        (-клёвывать): до- вы- по- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/рубить"
                            className="hover:text-orange-600"
                        >
                            рубить
                        </Link>{" "}
                        (-рубать): раз- от- вы- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/стигнуть"
                            className="hover:text-orange-600"
                        >
                            стигнуть
                        </Link>{" "}
                        (-стигать): до- на- за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/речь"
                            className="hover:text-orange-600"
                        >
                            речь
                        </Link>{" "}
                        (-рекать): пред- об- от- из-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/равнить"
                            className="hover:text-orange-600"
                        >
                            равнить
                        </Link>{" "}
                        (-равнять): при- по- с- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/рядить"
                            className="hover:text-orange-600"
                        >
                            рядить
                        </Link>{" "}
                        (-ряжать, -ряживать): об- раз- на- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/чинить"
                            className="hover:text-orange-600"
                        >
                            чинить
                        </Link>{" "}
                        (-чинять): при- под- со- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/мкнуть"
                            className="hover:text-orange-600"
                        >
                            мкнуть
                        </Link>{" "}
                        (-мыкать): при- раз- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/целовать"
                            className="hover:text-orange-600"
                        >
                            целовать
                        </Link>{" "}
                        (-целовывать): рас- на- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/печь"
                            className="hover:text-orange-600"
                        >
                            печь
                        </Link>{" "}
                        (-пекать): о- до- вы- за-
                    </div>
                    <div className="hover:text-stone-50">
                        -
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/личить"
                            className="hover:text-orange-600"
                        >
                            личить
                        </Link>{" "}
                        (-личать): об- раз- от- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/виснуть"
                            className="hover:text-orange-600"
                        >
                            виснуть
                        </Link>{" "}
                        (-висать): от- за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/граничить"
                            className="hover:text-orange-600"
                        >
                            граничить
                        </Link>{" "}
                        (-граничивать): раз- от- о-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/единить"
                            className="hover:text-orange-600"
                        >
                            единить
                        </Link>{" "}
                        (-единять): объ- разъ- со-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/хвалить"
                            className="hover:text-orange-600"
                        >
                            хвалить
                        </Link>{" "}
                        (-хваливать, -хвалять): рас- на- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/плакать"
                            className="hover:text-orange-600"
                        >
                            плакать
                        </Link>{" "}
                        (-плакивать): о- вы- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/возить"
                            className="hover:text-orange-600"
                        >
                            возить
                        </Link>{" "}
                        (-важивать): при- от- вы-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/морить"
                            className="hover:text-orange-600"
                        >
                            морить
                        </Link>{" "}
                        (-маривать): раз- вы- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ветрить"
                            className="hover:text-orange-600"
                        >
                            ветрить
                        </Link>{" "}
                        (-ветривать): об- про- вы-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/величить"
                            className="hover:text-orange-600"
                        >
                            величить
                        </Link>{" "}
                        (-величивать): воз- на- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/носить"
                            className="hover:text-orange-600"
                        >
                            носить
                        </Link>{" "}
                        (-нашивать): до- вы- из-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/копить"
                            className="hover:text-orange-600"
                        >
                            копить
                        </Link>{" "}
                        (-капливать): под- на- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/щупать"
                            className="hover:text-orange-600"
                        >
                            щупать
                        </Link>{" "}
                        (-щупывать): про- о- на-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/дразнить"
                            className="hover:text-orange-600"
                        >
                            дразнить
                        </Link>{" "}
                        (-дразнивать): пере- под- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/дарить"
                            className="hover:text-orange-600"
                        >
                            дарить
                        </Link>{" "}
                        (-даривать, -дарять): раз- о- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/значить"
                            className="hover:text-orange-600"
                        >
                            значить
                        </Link>{" "}
                        (-значать): обо- о- на-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/шептать"
                            className="hover:text-orange-600"
                        >
                            шептать
                        </Link>{" "}
                        (-шептывать): до- на- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/пасти"
                            className="hover:text-orange-600"
                        >
                            пасти
                        </Link>{" "}
                        (-пасать): о- за- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/тесать"
                            className="hover:text-orange-600"
                        >
                            тесать
                        </Link>{" "}
                        (-тёсывать): об- вы- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/выть"
                            className="hover:text-orange-600"
                        >
                            выть
                        </Link>{" "}
                        (-вывать): вз- под- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/толковать"
                            className="hover:text-orange-600"
                        >
                            толковать
                        </Link>{" "}
                        (-толковывать): рас- ис- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/будить"
                            className="hover:text-orange-600"
                        >
                            будить
                        </Link>{" "}
                        (-буждать): воз- про- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/беречь"
                            className="hover:text-orange-600"
                        >
                            беречь
                        </Link>{" "}
                        (-берегать): при- о- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/шибить"
                            className="hover:text-orange-600"
                        >
                            шибить
                        </Link>{" "}
                        (-шибать): о- вы- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ворачивать"
                            className="hover:text-orange-600"
                        >
                            ворачивать
                        </Link>{" "}
                        (-воротить): на- по- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/зреть"
                            className="hover:text-orange-600"
                        >
                            зреть
                        </Link>{" "}
                        (-зирать): над- пре- о-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/цвести"
                            className="hover:text-orange-600"
                        >
                            цвести
                        </Link>{" "}
                        (-цветать): рас- про- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/тонуть"
                            className="hover:text-orange-600"
                        >
                            тонуть
                        </Link>{" "}
                        (-топать): про- по- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/стыть"
                            className="hover:text-orange-600"
                        >
                            стыть
                        </Link>{" "}
                        (-стывать): о- вы- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/мигать"
                            className="hover:text-orange-600"
                        >
                            мигать
                        </Link>{" "}
                        (-мигивать): пере- под- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/цепить"
                            className="hover:text-orange-600"
                        >
                            цепить
                        </Link>{" "}
                        (-цеплять): от- с- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/хрипеть"
                            className="hover:text-orange-600"
                        >
                            хрипеть
                        </Link>{" "}
                        (-хрипывать): про- за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/пищать"
                            className="hover:text-orange-600"
                        >
                            пищать
                        </Link>{" "}
                        (-пискивать): про- за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/храпеть"
                            className="hover:text-orange-600"
                        >
                            храпеть
                        </Link>{" "}
                        (-храпывать): при- вс- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/доить"
                            className="hover:text-orange-600"
                        >
                            доить
                        </Link>{" "}
                        (-даивать): об- вы- на-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/винить"
                            className="hover:text-orange-600"
                        >
                            винить
                        </Link>{" "}
                        (-винять): об- из-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/оставить"
                            className="hover:text-orange-600"
                        >
                            оставить
                        </Link>{" "}
                        (-оставлять): пред- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/слабить"
                            className="hover:text-orange-600"
                        >
                            слабить
                        </Link>{" "}
                        (-слаблять): рас- о-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/сложнить"
                            className="hover:text-orange-600"
                        >
                            сложнить
                        </Link>{" "}
                        (-сложнять): о- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/мирить"
                            className="hover:text-orange-600"
                        >
                            мирить
                        </Link>{" "}
                        (-мирять): при- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/своить"
                            className="hover:text-orange-600"
                        >
                            своить
                        </Link>{" "}
                        (-своивать): при- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/тупить"
                            className="hover:text-orange-600"
                        >
                            тупить
                        </Link>{" "}
                        (-туплять): при- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/пределить"
                            className="hover:text-orange-600"
                        >
                            пределить
                        </Link>{" "}
                        (-пределять): рас- о-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ругать"
                            className="hover:text-orange-600"
                        >
                            ругать
                        </Link>{" "}
                        (-ругивать): об- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/далить"
                            className="hover:text-orange-600"
                        >
                            далить
                        </Link>{" "}
                        (-далять): от- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/рыгать"
                            className="hover:text-orange-600"
                        >
                            рыгать
                        </Link>{" "}
                        (-рыгивать): под- от-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/калить"
                            className="hover:text-orange-600"
                        >
                            калить
                        </Link>{" "}
                        (-калять): на- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/шатать"
                            className="hover:text-orange-600"
                        >
                            шатать
                        </Link>{" "}
                        (-шатывать): рас- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/бодрить"
                            className="hover:text-orange-600"
                        >
                            бодрить
                        </Link>{" "}
                        (-рождать, -рожать): вз- под-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/седлать"
                            className="hover:text-orange-600"
                        >
                            седлать
                        </Link>{" "}
                        (-седлывать): рас- о-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/тормозить"
                            className="hover:text-orange-600"
                        >
                            тормозить
                        </Link>{" "}
                        (-тормаживать): при- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/прямить"
                            className="hover:text-orange-600"
                        >
                            прямить
                        </Link>{" "}
                        (-прямлять): рас- вы-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/бормотать"
                            className="hover:text-orange-600"
                        >
                            бормотать
                        </Link>{" "}
                        (-борматывать): про- на-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/топырить"
                            className="hover:text-orange-600"
                        >
                            топырить
                        </Link>{" "}
                        (-топыривать): рас- от-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/поздать"
                            className="hover:text-orange-600"
                        >
                            поздать
                        </Link>{" "}
                        (-паздывать): о- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/двоить"
                            className="hover:text-orange-600"
                        >
                            двоить
                        </Link>{" "}
                        (-дваивать): раз- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/клинить"
                            className="hover:text-orange-600"
                        >
                            клинить
                        </Link>{" "}
                        (-клинивать): за- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/пыхать"
                            className="hover:text-orange-600"
                        >
                            пыхать
                        </Link>{" "}
                        (-пыхивать): вс- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/странить"
                            className="hover:text-orange-600"
                        >
                            странить
                        </Link>{" "}
                        (-странять): от- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/добрить"
                            className="hover:text-orange-600"
                        >
                            добрить
                        </Link>{" "}
                        (-добрять): о- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/срочить"
                            className="hover:text-orange-600"
                        >
                            срочить
                        </Link>{" "}
                        (-срочивать): про- от-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/кликать"
                            className="hover:text-orange-600"
                        >
                            кликать
                        </Link>{" "}
                        (-кликивать): вс- о-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/рушить"
                            className="hover:text-orange-600"
                        >
                            рушить
                        </Link>{" "}
                        (-рушать): раз- на-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/задорить"
                            className="hover:text-orange-600"
                        >
                            задорить
                        </Link>{" "}
                        (-задоривать): под- раз-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/травить"
                            className="hover:text-orange-600"
                        >
                            травить
                        </Link>{" "}
                        (-травлять): рас- о-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ценить"
                            className="hover:text-orange-600"
                        >
                            ценить
                        </Link>{" "}
                        (-ценивать): рас- о-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/кроить"
                            className="hover:text-orange-600"
                        >
                            кроить
                        </Link>{" "}
                        (-краивать): пере- вы-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/охранить"
                            className="hover:text-orange-600"
                        >
                            охранить
                        </Link>{" "}
                        (-охранять): пред- с-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/троить"
                            className="hover:text-orange-600"
                        >
                            троить
                        </Link>{" "}
                        (-траивать): вс- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/поведать"
                            className="hover:text-orange-600"
                        >
                            поведать
                        </Link>{" "}
                        (-поведывать): про- ис-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/устроить"
                            className="hover:text-orange-600"
                        >
                            устроить
                        </Link>{" "}
                        (-устраивать): пере- об-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ныть"
                            className="hover:text-orange-600"
                        >
                            ныть
                        </Link>{" "}
                        (-нывать): из- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/слонить"
                            className="hover:text-orange-600"
                        >
                            слонить
                        </Link>{" "}
                        (-слонять): при- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ветвить"
                            className="hover:text-orange-600"
                        >
                            ветвить
                        </Link>{" "}
                        (-ветвлять): раз- от-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/шарить"
                            className="hover:text-orange-600"
                        >
                            шарить
                        </Link>{" "}
                        (-шаривать): об- на-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/долбить"
                            className="hover:text-orange-600"
                        >
                            долбить
                        </Link>{" "}
                        (-далбливать): вы- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/корить"
                            className="hover:text-orange-600"
                        >
                            корить
                        </Link>{" "}
                        (-корять): по- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/дрожать"
                            className="hover:text-orange-600"
                        >
                            дрожать
                        </Link>{" "}
                        (-драгивать): вз- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/льстить"
                            className="hover:text-orange-600"
                        >
                            льстить
                        </Link>{" "}
                        (-льщать): обо- пре-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/вонять"
                            className="hover:text-orange-600"
                        >
                            вонять
                        </Link>{" "}
                        (-ванивать): под- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/пнуть"
                            className="hover:text-orange-600"
                        >
                            пнуть
                        </Link>{" "}
                        (-пинать): рас- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/ежить"
                            className="hover:text-orange-600"
                        >
                            ежить
                        </Link>{" "}
                        (-еживать): по- съ-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/волновать"
                            className="hover:text-orange-600"
                        >
                            волновать
                        </Link>{" "}
                        (-волновать): вз- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/решить"
                            className="hover:text-orange-600"
                        >
                            решить
                        </Link>{" "}
                        (-решать): раз- от-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/брести"
                            className="hover:text-orange-600"
                        >
                            брести
                        </Link>{" "}
                        (-бредать): раз- за-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/сверлить"
                            className="hover:text-orange-600"
                        >
                            сверлить
                        </Link>{" "}
                        (-сверливать): про- вы-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/грызть"
                            className="hover:text-orange-600"
                        >
                            грызть
                        </Link>{" "}
                        (-грызать): о- в-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/шагать"
                            className="hover:text-orange-600"
                        >
                            шагать
                        </Link>{" "}
                        (-шагивать): пере- вы-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/стеречь"
                            className="hover:text-orange-600"
                        >
                            стеречь
                        </Link>{" "}
                        (-стерегать): под- о-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/веять"
                            className="hover:text-orange-600"
                        >
                            веять
                        </Link>{" "}
                        (-вевать, -веивать): раз- на-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/гнести"
                            className="hover:text-orange-600"
                        >
                            гнести
                        </Link>{" "}
                        (-гнетать): на- у-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/стонать"
                            className="hover:text-orange-600"
                        >
                            стонать
                        </Link>{" "}
                        (-станывать): вы- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/звенеть"
                            className="hover:text-orange-600"
                        >
                            звенеть
                        </Link>{" "}
                        (-звенивать): за- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/карабкать"
                            className="hover:text-orange-600"
                        >
                            карабкать
                        </Link>{" "}
                        (-карабкивать): про- вы-
                    </div>
                    <div className="hover:text-stone-50">
                        -
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/требить"
                            className="hover:text-orange-600"
                        >
                            требить
                        </Link>{" "}
                        (-треблять): ис- по-
                    </div>
                    <div className="hover:text-stone-50">
                        -
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/становить"
                            className="hover:text-orange-600"
                        >
                            становить
                        </Link>{" "}
                        (-становлять, -станавливать): вос- по-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/коренить"
                            className="hover:text-orange-600"
                        >
                            коренить
                        </Link>{" "}
                        (-коренять): ис-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/кипеть"
                            className="hover:text-orange-600"
                        >
                            кипеть
                        </Link>{" "}
                        (-кипать): вс-
                    </div>
                    <div className="hover:text-stone-50">
                        <Link
                            target="_blank"
                            href="https://ru.wiktionary.org/wiki/кратить"
                            className="hover:text-orange-600"
                        >
                            кратить
                        </Link>{" "}
                        (-кращать): со-
                    </div>
                </div>
            </main>
        </>
    );
};

export default VerbTrees;
