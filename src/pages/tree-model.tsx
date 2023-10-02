import Head from "next/head";
import React from "react";
import Image from "next/image";
import вы from "./../images/вы-SemanticMap.jpg";
import говорить from "./../images/говоритьTree.jpg";
import кинуть from "./../images/кинутьTree.jpg";
import класть from "./../images/кластьTree.jpg";
import слать from "./../images/слатьTree.jpg";
import судить from "./../images/судитьTree.jpg";
import ездить from "./../images/ездитьTree.jpg";
import Footer from "~/components/footer";
import за_map from "./../images/за-SemanticMap.jpg";
import за_image from "./../images/за-image.jpg";
import AnkiRootList from "~/components/anki_root_list";

const tree_model = () => {
    const imageWidth = 600;
    const imageHeight = 800;
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
                <div className="px-4 transition-all duration-200 sm:w-[600px] md:w-[800px] lg:w-[1200px]">
                    <h1 className="mb-4 mt-6 text-center text-3xl">
                        Anki Flashcard Deck in the Verb Tree Model
                    </h1>
                    <p>
                        Anki is a digital flashcard application that provides
                        time-delayed exposure. Below you can download a deck
                        which contains a large number of Russian verb trees,
                        presented as: Rootspace (-Branch Imperfective). The deck
                        also contains multiple explanation cards, diagrams,
                        example verb tree demonstrations, and semantic snapshots
                        of the Russian verbal prefixes.
                    </p>
                    <p>
                        {" "}
                        The verb tree model presents Russian verbs as routinely
                        derived sets of branch pairs, generated predictably from
                        a small number of Rootspace arrangements.
                    </p>
                    <p>
                        In the diagrams, the footers "Rootspace" and
                        "Branchspace" are intended to be considered
                        systematically paired. That is, a Rootspace of
                        (-ать/-нуть) should be assumed at baseline to result in
                        a doubled perfective branch, etc.
                    </p>
                    <p>
                        The basic rule of this model follows what has become
                        standard fare in Russian linguistic literature: prefixes
                        perfectivize, suffixes imperfectivize.
                    </p>
                    <p>
                        While it is true that given the Rootspace, one can
                        derive the resulting Branchspace, organizing the model
                        that way would be pedagogically verbose, as students
                        would need learn the corresponding Branchspace
                        arrangements for each of the Rootspace prototypes. By
                        minimally increasing the length of the vocabulary token
                        to include the Rootspace and the branch imperfective
                        stem, the model provides a robust, simple, and efficient
                        system of packaging Russian verbs for learning.
                    </p>
                    <p>
                        {" "}
                        So, where the tree model is utilized, the tree is
                        distilled as: Rootspace (-Branch Imperfective)
                    </p>
                    <br />
                    <br />
                    <p>
                        Here, you can download the deck for use in Anki. Below
                        are the contents of the deck.
                    </p>
                    <a
                        href="/static/Verb Root Master List (10-3-22).apkg"
                        download
                    >
                        {" "}
                        <button className="my-4 text-orange-600 hover:text-orange-600">
                            Download Anki Deck
                        </button>{" "}
                    </a>
                    <h1 className="mb-4 mt-6 text-6xl">Verb Tree List</h1>
                    <h2 className="mt-6 text-3xl">
                        Trees with Example Diagrams
                    </h2>
                    <div>
                        говорить (-говаривать) <br />
                        судить (-суживать, -суждать) <br />
                        кидать / кинуть (-кидывать)
                        <br />
                        класть / (положить) (-кладывать, -лагать) <br />
                        слать (-сылать)
                        <br />
                        ехать / ездить (-езжать, -езживать) <br />
                    </div>
                    <div className=" flex flex-col lg:flex-row">
                        <Image
                            className=" p-2"
                            src={говорить}
                            alt="diagram"
                            width={imageWidth}
                            height={imageHeight}
                        ></Image>
                        <Image
                            className=" p-2"
                            src={судить}
                            alt="diagram"
                            width={imageWidth}
                            height={imageHeight}
                        ></Image>
                    </div>
                    <div className=" flex flex-col lg:flex-row">
                        <Image
                            className=" p-2"
                            src={кинуть}
                            alt="diagram"
                            width={imageWidth}
                            height={imageHeight}
                        ></Image>
                        <Image
                            className=" p-2"
                            src={класть}
                            alt="diagram"
                            width={imageWidth}
                            height={imageHeight}
                        ></Image>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <Image
                            className=" p-2"
                            src={слать}
                            alt="diagram"
                            width={imageWidth}
                            height={imageHeight}
                        ></Image>
                        <Image
                            className=" p-2"
                            src={ездить}
                            alt="diagram"
                            width={imageWidth}
                            height={imageHeight}
                        ></Image>
                    </div>
                    The 'ехать' image shows absolute canonical motion verb tree
                    format, whereby each root forms their respective branch.
                    Despite this pattern, some motion verbs get more
                    complicated, such as ехать/ездить, which has a doubled
                    perfective branch: в<u>ы</u>ехать в<u>ы</u>ездить both
                    exist.
                    <br />
                    It's important to note this, because motion verbs require a{" "}
                    <i>different than usual metric </i>to judge aspect: заходить
                    is not perfective! In motion verb trees, the "abstract" root
                    forms the imperfective tree. So, usually, there aren't
                    doubled perfective branches in motion verbs.
                    <br />
                    This verb, however, looks more like a usual verb tree. ;
                    <br />
                    Note that ложить is now a proscribed word. The branches that
                    come from it, however, are perfectly ubiquitous. -лагать
                    based imperfectives tend towards a bit more formality. This
                    evidences the myth-mnemonic to help you remember: класть
                    came into fashion pushing out older ложить, in all sorts of
                    spots in the tree, but first the root. Common quirks
                    include: <br />
                    Doubled Perfective Branch, when either of two roots can be
                    prefixed to make perfectives (кинуть)
                    <br />
                    Doubled Imperfective, when multiple endings (or consonant
                    mutations) are possible to create imperfective forms
                    (судить)
                    <br />
                    <h2 className="mt-6 text-3xl">Tree List ~ 250 roots</h2>
                    <br />
                    <h4 className="text-2xl">General Verbs</h4>
                    <br />
                    <AnkiRootList />
                    <h1 className="mb-4 mt-6 text-6xl">Trees</h1>
                    Trees are tokenized as: imperfective root / root
                    (imperfective branch -ывать/-ивать, or -ать/-ять) <br />
                    Cards are designed to give you the information to form the{" "}
                    <i>entire tree </i>(see говорить card's image), just from
                    information in the card.
                    <br />
                    The most common card (verb tree) is laid out like so:
                    <br /> 1. Imperfective root verb (branch imperfective form)
                    <br /> 2. English translation
                    <br /> 3. Additional things of note, especially hard
                    conjugations etc.
                    <br />
                    <br />
                    Otherwise, there is a pair:
                    <br />
                    imperfective / perfective (imperfective branch form)
                    <br />
                    <br />
                    Since Roots can reliably be distinguished for which aspect
                    they are (according to the rules below and in "New Word
                    Aspect Recognition &amp; Pair Derivation"), they are listed
                    in <i>either aspect first, randomly</i>.
                    <br />
                    <br />
                    -ить (-ивать)
                    <br />
                    <br />
                    <u>Roots:</u>
                    <br />
                    Where a '-нуть' root is alone, it may be imperfective.
                    <br />
                    Where "-нуть / -ать or -ять" occurs, -нуть always the
                    perfective, e.g. perfective дрогнуть, imperfective дрожать.
                    <br />
                    Where "-ать / -ить" occurs, -ить is the perfective, e.g.
                    perfective пустить, imperfective пускать
                    <br />
                    This is often because "-ать" is an added, imperfectivizing
                    suffix.
                    <br />
                    <br />
                    Look out for 'surrogate perfectives.' This is when an
                    imperfective root is said to be paired with a very different
                    looking perfective root: what has actually occured is that a
                    prefixed root (therefore perfective) from a different tree
                    has become a stand-in perfective. Note that the tree for
                    such an odd pair is reliably formable from the imperfective
                    root. For example,
                    <br />
                    говорить / сказать (imp. казать out of style)
                    <br />
                    ловить / поймать (по- plus a root related to the -имать /
                    -ять in взять / взимать)
                    <br />
                    брать / взять (вз- + ять, now an obsolete word meaning take,
                    related to имать, -нимать)
                    <br />
                    класть / положить (imp. ложить out of style)
                    <br />
                    <br />I have put one of the verbs in a pair in parentheses
                    at times, to show that the parenthetical form is a kind of
                    surrogate, so that you know that the tree in question is
                    formed off of the other, e.g. (ложиться) / лечь (-легать),
                    where ложиться is coming in from a different tree to fill
                    that role, and for this tree, everything is based on -лечь /
                    -легать, e.g. облечь / облегать, to cover (literally: to lay
                    something 'about' something)
                    <br />
                    <br />
                    <b>
                        <u>Lone</u> -ить
                    </b>
                    , -еть, -ать{" "}
                    <b>roots should be assumed imperfective (the default).</b>
                    <br />
                    <br />
                    Some roots have underlying consonants (hidden by -сти or
                    -нуть) which reemerge whenever these are removed, i.e.
                    imperfective branches (having gained -ывать/-ивать, or
                    -ать/-ять).
                    <br />
                    <br />
                    The bulk of cards show:
                    <br />
                    imperfective -ить Root Verb (-ивать form which makes its
                    imperfective branch)
                    <br />
                    The perfective branch is then formed with any old prefix put
                    onto the Root Verb, where the prefix defines a 'criterion of
                    completion state' necessary for perfectiveness (see Example
                    Verb cards)
                    <br /> ;
                    <br />
                    <u>
                        Branches:
                        <br />
                    </u>
                    Additional notes on each card list conjugations, useful,
                    interesting, or strange Branch verbs and their meanings, or
                    for some verbs, lists the few forms that can actually be
                    made from the root (e.g. many verbs never officially reach
                    imperfective branches, being prefixed by only two or three
                    prefixes).
                    <br />
                    <br />
                    Prefixes can vary in spelling due to voicing and consonant
                    clusters: раз-, раc-, разо-; в-, во-; о-, об-, обо-; от-,
                    ото-, etc. Keep in mind that the prefix will weave in and
                    out of spellings as forms change, too: размять &gt; я раз
                    <b>о</b>м<u>ну</u>
                    <br />
                    <br />
                    вы- is a prefix which always claims stressed-syllable status{" "}
                    <i>in the perfective</i>. This distinguishes the Root Verb
                    вы-conjugation from the Prefixed Forms вы-conjugation:
                    <br />в<u>ы</u> ;говор<u>и</u>те (you all speak)
                    <br />
                    vs
                    <br />в<u>ы</u>говорите (you all will express)
                    <br />
                    but since -ивать removes this necessity:
                    <br />
                    выгов<u>а</u>риваете (you all are expressing)
                    <br />
                    Otherwise, they would be confused in speech.
                    <br />
                    <br />A root verb with a prefix added becomes perfective.
                    With roots verbs that come in an aspectual pair, sometimes
                    either root can be used for the branch perfectives, creating
                    a doubled perfective branch (
                    <a
                        target="_blank"
                        className="link"
                        href="https://en.wiktionary.org/wiki/%D1%81%D0%B2%D0%B8%D1%81%D1%82%D0%B0%D1%82%D1%8C#Russian"
                    >
                        https://en.wiktionary.org/wiki/свистать#Russian
                    </a>
                    ). This is mostly something not to worry about, although the
                    details are explained further below.
                    <br />
                    <br />
                    Some very short words (петь, деть, пить, лить, стать) are
                    governed using -вать to make imperfectives.
                    <br />
                    <br />
                    <u>
                        Almost all verbs use -ывать/-ивать to form branch
                        imperfectives
                    </u>{" "}
                    (-иваю, -иваешь, -ивают), which always brings stress change
                    to the syllable immediately preceding the -ивать, e.g.
                    говор-<u>и</u>ть &gt; выгов<u>а</u>р-ивать (often words
                    mutate during this, changing unstressed 'о' to stressed 'а',
                    or revealing an underlying 'ё' when a previously unstressed
                    'е' gains stress). (
                    <a
                        target="_blank"
                        className="link"
                        href="https://en.wiktionary.org/wiki/%D0%B6%D0%B5%D0%B2%D0%B0%D1%82%D1%8C"
                    >
                        https://en.wiktionary.org/wiki/жевать
                    </a>
                    )<br />
                    <br />
                    While every verb's -ывать/-ивать branch imperfective form is
                    listed, the point is mainly that the verb gets <i>
                        that
                    </i>{" "}
                    ending, rather than -ать/-ять (the part to learn with a new
                    verb: -ывать or -ать?), because, apart from the odd
                    mutation, the addition of -ывать/-ивать and the resulting
                    form is wildly predictable, as you'll see. Technically, even
                    the mutations can be intuited in many cases, with
                    experience.
                    <br />
                    <br />
                    If a word is listed with no parenthetical, there appears to
                    exist no imperfective branch for it. So, there is the root,
                    and whatever perfectives can be made with prefixes, but no
                    need generally to have gone any further and made a branch
                    imperfective. Do not be surprised however if a writer forces
                    any old word to gain по- + -ывать.
                    <br />
                    <br />
                    The suffix -<u>а</u>ть is intrinsically stressed. In roots,
                    where it is sometimes implicitly used, this is mostly
                    reliable. In branch perfectives, this is totally reliable.
                    No matter what, words that have indeed been suffixed with -
                    <u>а</u>ть are "-<u>а</u>ю, -<u>а</u>ешь, -<u>а</u>ют" etc.
                    (
                    <a
                        target="_blank"
                        className="link"
                        href="https://en.wiktionary.org/wiki/%D0%B2%D1%8B%D1%81%D1%8B%D0%BF%D0%B0%D1%82%D1%8C#Russian"
                    >
                        https://en.wiktionary.org/wiki/высыпать#Russian
                    </a>
                    )<br />
                    <br />
                    Because of this and the way -ывать/-ивать works, the
                    stressed syllable of imperfective branch verbs (which
                    near-misses making up about half of the verbs you'll
                    encounter!) is always predictable! Ура!
                    <br />
                    <br />A few root verbs ending in "ать" are not actually
                    stressed on this syllable (hypothetically because it's not{" "}
                    <i>the</i> ;suffix "-<u>а</u>ть"), but their branch forms
                    are, indicating that -<u>а</u>ть has been added overtop. For
                    example, "sprinkle along," i.e. "to strew"
                    <br />
                    <i>imperfective</i> с<u>ы</u>пать (я с<u>ы</u>плю) &gt;{" "}
                    <i>perfective</i> пос<u>ы</u>пать (я пос<u>ы</u>плю)&gt;{" "}
                    <i>imperfective</i> посып<u>а</u>ть (я посып<u>а</u>ю)
                    <br />
                    <br />
                    The adding of suffixes often induces mutation letters such
                    as судить &gt; -суживать, or цепить &gt; -цеплять. (
                    <a
                        target="_blank"
                        className="link"
                        href="https://en.wiktionary.org/wiki/%D0%BB%D1%8E%D0%B1%D0%B8%D1%82%D1%8C"
                    >
                        https://en.wiktionary.org/wiki/любить
                    </a>
                    )<br />
                    <br />
                    Branch imperfectives are listed with a hiphen to denote that
                    the form does not consitute a word on its own, but rather
                    occurs with a prefix, e.g. -суживать &gt; отсуживать,
                    подсуживать, ссуживать. Sometimes, a historic root has lost
                    function, and there remains only a pair of prefixable forms,
                    perfective and imperfective, only seen with prefixes. (
                    <a
                        target="_blank"
                        className="link"
                        href="https://en.wiktionary.org/wiki/-%D1%81%D0%BA%D0%BE%D1%87%D0%B8%D1%82%D1%8C"
                    >
                        https://en.wiktionary.org/wiki/-скочить
                    </a>
                    )<br />
                    <br />
                    There are also instances where the root has essentially gone
                    out of usage, but the many prefixed forms are frequent, e.g.
                    казать (now an archaic word) gives us сказать, показать,
                    заказать, оказаться, as well as сказывать (poetic),
                    показывать, заказывать, оказываться.
                    <br />
                    <br />
                    Occasionally, the branch imperfectives can be made using
                    different options, making a doubled imperfective branch
                    (-суждать, -суживать). (
                    <a
                        target="_blank"
                        className="link"
                        href="https://en.wiktionary.org/wiki/%D1%81%D1%83%D1%88%D0%B8%D1%82%D1%8C"
                    >
                        https://en.wiktionary.org/wiki/сушить
                    </a>
                    )<br />
                    <br />
                    It is not inherently clear whether -ать was added before or
                    after the prefix of a word (which would make it perfective
                    or imperfective, respectively). This accounts for the
                    prevelance of -ывать, -ивать, which does not have this
                    problem. To avoid this pitfall, <u>when in doubt</u>, add
                    your prefixes to the -ить or -нуть root, whenever roots
                    occur in an -ать/-нуть or -ать/-ить pair.
                    <br />
                    <br />
                    Some special, common words (Basal Pairs or Quirky Pairs,
                    whatever you want to call them, they deserve a specific
                    name, and special attention to learn their list) have a
                    special branch imperfective form, generally using an infixed
                    -и-, and ending in the usual -ать. A few common ones, to see
                    the pattern, are: <br />
                    жать &gt; -жимать, <br />
                    мять &gt; -минать
                    <br />
                    тереть &gt; -тирать, <br />
                    гнуть &gt; -гибать, <br />
                    мереть &gt; -мирать,
                    <br />
                    слать &gt; -сылать (я шлю, ты шлёшь and я посылаю, ты
                    посылаешь)
                    <br />
                    брать &gt; -бирать
                    <br />
                    спать &gt; -сыпать (e.g. просыпаться - literally: to sleep
                    oneself through, i.e. "wake up")
                    <br />
                    <br />
                    While the left-hand form has a wacky conjugation, the right
                    hand ones will all have standard -ать ones.
                    <br />
                    <br />
                    Similarly, -чь words tend to reveal underlying constants in
                    their conjugations, which are seen in their paired -ать
                    forms. ;
                    <br />
                    <br />
                    мочь - помочь - помогать
                    <br />я мо<u>гу</u>, помогу, помогаю
                    <br />
                    ты можешь
                    <br />
                    <br />
                    влечь - привлечь - привлекать
                    <br />Я вле<u>ку</u>, привлеку, привлекаю
                    <br />
                    ты влечёшь
                    <br />
                    <br />
                    сечь - отсечь - отсекать
                    <br />Я се<u>ку</u>, ; отсеку, отсекаю
                    <br />
                    Ты сечёшь
                    <br />
                    <br />
                    <br />
                    <u>In verbs with doubled perfective branches</u>, the
                    difference between the two perfectives is often that the
                    -нуть/-ить/-еть one denotes singular instance (something
                    -нуть is especially known for), while the -ать does not,
                    perhaps emphasizing the prefix completion-state over
                    'one-timeness.' So, подсвистнул might mean a{" "}
                    <i>single whistle up</i> at something, while подсвистел
                    would simply emphasize that the whistling occured from
                    below, and perhaps that it had gotten their attention
                    (succeeded). Another example might be скинуть, to do a
                    single <i>throwing together</i> action (one throw), versus
                    скидать, to throw together (emphasizing that the "together"
                    happened and is finished, although probably in many
                    individual 'throws').
                    <br />
                    <br />Я отбросил одежды на кровать, и потом... (It got
                    thrown on the bed in one chuck.)
                    <br />
                    Я отбросал одежды на кровать, и потом... (It took multiple
                    throws, but it got done.)
                    <br />
                    Я отбрасывал одежду на кровать, когда я заметил... (The
                    action of throwing clothes to the side was occuring,
                    when...)
                    <br />
                    <br />
                    If we're being completely accurate, -ывать -ивать can be
                    added even to roots alone (rarely, with certain words). Its
                    function is along the lines of "iterativity", multiple
                    timed-ness (многократное действие). This is most relevant
                    for motion verbs which tend to develop pretty complex trees.
                    To illustrate, see the following words:
                    <br />
                    говаривать - многократное к "говорить" - to say multiple
                    times. In past tense ~ "used to say"
                    <br />
                    певать - многократное к глаголу "петь"
                    <br />
                    бивать - многократное к "бить"
                    <br />
                    лёживать - многократное к "лежать"
                    <br />
                    слеживать - for следить
                    <br />
                    ганивать - гнать-гонять (whose tree doesn't even have
                    -ивать)
                    <br />
                    <br />
                    You can use these forms when emphasizing the habituality or
                    repeated quality of an action, rather than the <i>
                        doing
                    </i>{" "}
                    ;of the action (as opposed to <i>not doing</i> ;of an act),
                    and when also not interested in specifying any sort of
                    completion criterion or specificity in the type of act (that
                    is to say, сговорить is like a specific type of говорить).
                    If you say "Don't care, just want the verbs raw action, but
                    iterative.", use these, or just say много раз or something
                    like that.
                    <br />
                    For obvious reasons, such forms are exceedingly rare in the
                    present tense, often relegated to past tense."
                    <br />
                    ять, -нять / имать ; (-ымать, -имать, -нимать) to take, grab
                    "These are all no longer root words, but we retain many of
                    their branch forms. So ять / имать is obsolete, but you'll
                    see:
                    <br /> поднять / поднимать - to take up, i.e. "to raise"
                    (archaic, poetic: подъять / подымать)
                    <br /> снять / снимать - take off (e.g. a hat)
                    <br /> объять / обымать, обнимать - take about, envelop;
                    comprehend
                    <br /> внять / внимать - (stilted, poetic, literary) to
                    hark, listen, heed ("take in"); from whence we get the
                    frequently seen "внимательный" (attentive, focused in,
                    mindful)
                    <br /> взять / взимать or взымать (or just брать) -
                    literally "take up", grab, acquire (as opposed to "take
                    away" or "take off")
                    <br /> изъять / изымать - to remove, to withdraw ("take
                    out")
                    <br /> понять / понимать - take along, "to understand"
                    [proposing that you take information on your journey :) ]
                    <br /> The associated noun for this tree is ём. (Compare
                    related иметь)"
                    <br />
                    <h1 className="mb-4 mt-6 text-6xl">
                        Concept of Perfectivity
                    </h1>{" "}
                    Unprefixed root verbs can be considered "Acts"
                    (Imperfective). They refer to the action of the words
                    meaning.
                    <br />
                    From there, by adding a prefix we{" "}
                    <u>specify a criterion for completion-state</u> ;(apartness,
                    throughness, downness, togetherness), by virtue of the
                    meaning of the prefix. Prefixes add a direction-destination,
                    whether abstract or physical, by which it is not only
                    possible but<u> logical </u>that the verb become
                    "perfective" - a prefix defines a criterion for a form of
                    completedness. Then, instead of acts, we refer to "goals"
                    (some of which are literal "completion," but the prefix
                    applied can mean a variety of things other than). ;
                    <br />
                    <br />
                    Perfectivity is not completion, precisely—it's goal-emphasis
                    rather than act-emphasis
                    <br />
                    писать - writing as an act in and of itself
                    <br />
                    пописать - passing some amount of time (по-), writing
                    (писать)
                    <br />
                    пописал - spent some time writing
                    <br />
                    пописывать - the act of writing (in the context of spending
                    some time doing it)
                    <br />
                    пописывал - engaged in the act of spending some time writing
                    <br />
                    <br />
                    This explains how perfectivity-imperfectivity is{" "}
                    <i>more interchangeable than you think</i>, and that the
                    usual rules do not encompass the variety of usages you can
                    encounter.
                    <br />
                    <br />
                    -нуть perfectives can be perfective without a prefix
                    generally because they refer to singular actions, especially
                    singular instantaneous actions (actions with no duration).
                    <br />
                    <h1 className="mb-4 mt-6 text-6xl">
                        Prefix Usage Guide - Philosophy of Language Learning
                    </h1>{" "}
                    Recognition is easiest - noticing that a verb is prefixed.
                    This leads to exposure to examples, which leads to having
                    understood examples, which leads to unconscious
                    generalization: an intuition for meanings, both in
                    production and in comprehension, that is, the ability to get
                    a sense for the prefixes in new words without a dictionary,
                    thus unlocking over half of the verbs on a page. Production,
                    of course, will always be harder, and involve awkward
                    mistakes.
                    <br />
                    <br />
                    What is "the perfective" of a verb? As you can see in the
                    Example Verb sections, the whole idea is somewhat
                    questionable. There is, in some sense, no such thing. There
                    are many perfectives made from their own prefixes, and
                    sometimes, especially the more advanced and abstract the
                    word, there is a default or most common prefix, but in
                    reality this is nothing terribly official. This means that
                    exposure to lots of input is necessary to get a sense for
                    what the best perfective would be. Instead of rote
                    memorization of a pair, this means coming to really
                    understand what's being done when there is a particular
                    perfective to use, over others.
                    <br />
                    "Completion" or "single-instance" are perfective qualities,
                    yes, but for most verbs out there, such states aren't
                    inherently conceivable. Instead, they get perfectivity from
                    the frame added by a prefix.
                    <br />
                    <br />
                    Lots of the words in this list are not ones you would want
                    to try to add prefixes to yourself, but it is a central task
                    in reading Russian text, which hasn't been pre-prepared for
                    you, to be able to recognize, parse, and surmise the meaning
                    of novel words based on their parts. Once you can do this,
                    you can read fluidly, even after only learning a couple
                    hundred roots (a far cry from the <u>
                        tens of thousands
                    </u>{" "}
                    of vocab words that the standard model suggest you need);
                    once you can read fluidly, you have an infinite amount of
                    mostly comprehensible (and engaging) language input, which
                    you can use to come across all the different forms you might
                    want to use, in context of sentences, and in the context of
                    narratives, all of which helps to specify and maintain
                    memory.
                    <br />
                    <br />
                    Verbs are not only the center of syntax for sentences, but
                    they are probably also the main players in forming
                    "context." They provide the meat of the mental image
                    produced by "understanding." Because of this, a person who
                    has learned many nouns can only guess (and therefore learn
                    without looking up, read without stopping) so many verbs
                    (often you'll have no chance of this at all), but by
                    contrast, a person who has learned many verbs not only has
                    access to the morphological root ("качалка looks like its
                    from качать!"-each meaning has its group of nouns, verbs,
                    adjectives etc made for it, and so the meaning can be
                    accessed through entry by any of the parts of speech;
                    though, perhaps most effectively through the door of
                    "verbs"), they also can manage to create a mental image of
                    an unfolding story, which gives much stronger clues for the
                    nouns in the sentence! Compare:
                    <br />
                    <br />
                    "He walked over to the ___, moved to the side a ____, and
                    looked closely at the ______, in order to plan his ____."
                    <br />
                    vs
                    <br />
                    "He _____ to the table, ______ a mug, _____ at the map, in
                    order to ____ his journey."
                    <br />
                    Which of these provides a more understandable, engaging
                    mental image? Which makes you feel more confident to move on
                    to the next sentence? Which gives you the best basis for
                    understanding that next sentence? Which tells a story? Which
                    has blanks that are easier to guess?
                    <div>
                        I propose the former. (Our psychology probably defines
                        nouns in the first place by way of action and verb, so
                        there is yet further reason to put in the primary focus
                        VERBS)
                        <br />
                        Combine this with the fact that there are a small number
                        of verbs used in a disproportionate number of sentences{" "}
                        <i>no matter</i> the topic (which cannot be said quite
                        the same about nouns, where topics can really,{" "}
                        <i>really</i> change the set of words: people are always
                        getting on, getting off, saying, noticing, being afraid,
                        picking up and putting down, but just imagine the
                        difference between the vocab involved in a library,
                        versus a warzone, or a hospital!), and the right
                        technique becomes clear: Learn verbs. Then you can parse
                        the key elements of sentences, and the rest (nouns) can
                        be accessed through contextualized experience. If
                        somebody "picks something up to cut"-in a hospital you
                        can guess "scalpel", library guess "scissors", warzone
                        guess "knife."
                    </div>
                    <div>
                        <br />
                    </div>
                    <div>
                        Plus, you can express yourself far more versatilely with
                        a handful of verbs, than with a handful of nouns.
                        <br />
                        Further, on the average page, the vast majority of verbs
                        are, so to speak, native Russian (говорить doesn't look
                        at all like "speak"), whereas its quite a bit more
                        likely that a noun you run across on a given page may be
                        a loan word, resembling something you can guess like
                        "лифт" (a lift, elevator)
                        <br /> ;(As if, people have been doing the same things
                        everywhere and forever, just with different objects.)
                        <br />
                        <br />
                        Now, one could argue the opposite, and say "How many
                        actions do you do with coffee" Pour, sip, drink, heat.
                        Maybe a few others. How many objects might you "hit"?
                        Too many possibilities to list! Thus nouns can, in some
                        instances, be impossible to guess, and verbs actually
                        somewhat easy. While this is true, I still suspect, в
                        конце концов, the preceding argument holds more weight
                        in the process of trying to read on one's own.
                        <br />
                        <br />
                        <br />
                        Once you know 30 verbs with the prefix за-, <i>
                            and
                        </i>{" "}
                        ;the 30 root-verbs that those are made out of, then you
                        can come to get a sense of the meanings of за-, when
                        which meaning applies, and how the word formation
                        process occurs. But this requires learning root verbs,
                        and prefixes,
                        <i> in two separate acts</i>. In the traditional model,
                        you may be given 100 words that are prefixed with за-,
                        but never given the roots <i>in isolation</i>, so it is
                        next to impossible to get a feel for the prefix in
                        isolation (and therefore, to generalize it). One could
                        easily miss that засыпаться is derived from спать.
                        <br />
                        <br />
                        Some prefixes are easier than others. The ones used most
                        easily for <i>ad hoc</i> creation, on-the-fly invention,
                        are probably по- and пере-. You can immediately be
                        confident that you can slap пере- on a verb of your
                        choosing to say "re-do", "re-watch", "re-think," or по-
                        to mean "for a little bit, for some time." But even this
                        varies, and пере- will not always result in the intended
                        sense in the listener. ;
                        <br />
                        <br />
                        On the other end of the spectrum might be "про-" in the
                        meaning of 'mistakenly.' As far as I am aware right now,
                        it is not likely to make sense doing this randomly on
                        one's own. Instead, use this knowledge to help{" "}
                        <i>remember</i> encountered instances of that meaning.
                        <br />
                        <br />
                        Many meanings of prefixes, even when they have multiple,
                        are so stable that you can assume that a verb prefixed
                        with по- could mean "arbitrary time limit" even if
                        dictionaries do not list this as one of the meanings. It
                        is possible, and happens more than you think! Without
                        this system, you might be at a loss - "There's no
                        dictionary entry for it!". With this system, you can
                        confidently keep reading and understanding, having not
                        even checked a dictionary, and seemlessly enjoyed the
                        compact artful conveyence of meaning that is the великий
                        могучий русский язык.
                        <br />
                        <br />
                        Some verb-trees are easier than others. They can equate
                        very closely to phrasal verbs in English: cut off, cut
                        through, cut out, cut in, cut away, cut across. Others,
                        however, are harder to understand the connection between
                        the root and its prefixed forms. Attempts can and should
                        be made to understand these as two meanings, prefix and
                        root, separately added together, even though this is
                        difficult and often seemingly fruitless, because such an
                        act radically increases memorability (by virtue of being
                        a moderately less arbitrary "mind-palace"), and bolsters
                        one's sense of the prefix. ;
                        <br />
                        <br />
                        Although the prefix cards make an effort to point out
                        the supreme similarity, larger than you might suspect,
                        between English phrasal verbs and Russian prefixed
                        verbs, fundamentally at the end of the day it's not
                        precisely so much about translating words and finding
                        equivilants, as it is about seeing the <i>image</i>
                        -embodied experiential-sensory contents:
                        stories-expressed by the word in Russian. A word, which
                        is a tool-package of such contents. Разлить по кружкам -
                        should this be equated to "Pour apart", "pour between"?
                        Perhaps a relevant question. But what is definitely
                        important is that you can acquire from the phrase the
                        intended image: Someone pouring a single container of
                        liquid into multiple, as they would for a set of guests
                        etc.
                    </div>
                    <h1 className="mb-4 mt-6 text-6xl">Prefixes</h1>
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">*по- "along"</h2>
                    <br />
                    1. Along some kind of length
                    <br />
                    2. For an arbitrary time limit ("for some time")
                    <br />
                    3. An arbitary amount of the course of the action makes it
                    'along' its way (arbitrary directionality)
                    <br />
                    4. Arbitrary amount of action started along its way
                    (beginning of action emphasized, starting)" "Compare the
                    phrases
                    <br />
                    "He whistled along down the street." (1 and 2)
                    <br />
                    "He pulled along a cart behind him." (3)
                    <br />
                    "After that, he went along." (4) Arbitrary directionality
                    naturally starts to include a deemphasis in direction or
                    course, and to take up emphasis on the basic beginning of
                    movement.
                    <br />
                    <br />
                    Sense 3 is one of the best and quickest ways to understand
                    the meaning and usage of пойти--de-emphasis on
                    directionality, emphasis on "along-its-way", whatever that
                    may be."
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        *c(о)- "together (with) // down (off)"
                    </h2>
                    <br />
                    1a. (from с+gen) off of a surface
                    <br />
                    1b. downward
                    <br />
                    2a. (from c+instr) combining by the action
                    <br />
                    2b. something coming together or forming together by the
                    action (product emphasis)
                    <br />
                    3. (c- + -ся) mutual convergence
                    <br />
                    <br />
                    cкидывать / cкинуть - throw down, throw off; throw together
                    <br />
                    сорвать / срывать - rip off, ; pluck. Он сорвал покрытие
                    подарка.
                    <br />
                    составить / составлять - put with, put together, stack
                    (things together), compose, gather
                    <br />
                    столкнуть / сталкивать - to push off or away, push together.{" "}
                    ;
                    <br />
                    слить / сливать - to pour together; to pour off a surface,
                    pour off the top (to separate). .<br />
                    сговорить / сговаривать - converge by speaking, come to
                    agreement
                    <br />
                    смять / сминать - (from c+inst) squeeze into a lump; (from
                    с+gen) to squeeze down (e.g. driving over grass)
                    <br />
                    сжать / сжимать - press together (e.g. teeth, enemy forces)
                    <br />
                    созывать or сзывать / созвать - call together (e.g. a town)
                    <br />
                    соглас<u>и</u>ться / соглаш<u>а</u>ться [голос - voice] -
                    voice oneself together with, i.e. to agree
                    <br />
                    <br />
                    Обстоятельства столкнули их вместе. Он столкнул вора, и
                    убежал.
                    <br />
                    Дождь слилась с крыш. Давайте сливаем эти бутылки в один
                    большой стакан.
                    <br />
                    "Ад и Земля сольються воед<u>и</u>но." (into one, together)"
                    "What's the deal with multi-meaning prefixes? Most prefixes
                    come with a short list of meanings, which are generally
                    tangled together, and derived in a series, from physical to
                    abstract. с-, however, has two completely different
                    <i> physical </i>meanings in play which can be hard to
                    parse.
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        *раз- "apart, out (all over), dis-, between"
                    </h2>
                    <br />
                    1. Divergence, or happening in multiple/different
                    <i> destinations</i> or<i> directions </i>(2 is enough)
                    <br />
                    2. Spreading apart
                    <br />
                    3. (of emotional verbs) arising, growing, emerging: "to
                    become" (злить / разозлить; сердить / рассердить)
                    <br />
                    <br />
                    рассмотреть / рассматривать - to look apart, to look in
                    detail, to look in order to discern parts or details
                    <br />
                    разложить / разлагать (or раскладывать) - to lay out, lay
                    apart, spread out, place out; to separate
                    <br />
                    разлить / разливать - to pour apart, separate pouring, to
                    pour so much it spills over edges in all directions
                    <br />
                    разговорить / разговаривать - speaking in both directions,
                    speaking that has a listener, rather than the mere act of
                    speaking говорить ;
                    <br />
                    растерять / растеривать - to lose everything of much of what
                    one had; to lose bit by bit (lose in every which direction)
                    <br /> "По-русски разговариваешь?" isn't merely asking "Can
                    you engage in production (in a void)?" (говорить
                    по-русски)--it's "Do you convese in both directions?"
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        *у- "away, at, tó (stressed form, see examples)
                    </h2>
                    <br />
                    1. Emphasis on a particular proximity, spot, area, where
                    action occurs (conveying aimedness, or catching)
                    <br />
                    2. Emphasis that action has moved out of particular spot or
                    proximity (disappearence)
                    <br />
                    <br />
                    уйти / уходить - going left this proximity, i.e. to leave
                    <br />
                    урваться / урываться - tear away
                    <br />
                    уставить / уставлять - to place or set a space (уставить что
                    чем, уставить что куда)
                    <br />
                    улить / уливать - excessively pour, pour over completely
                    (i.e. fill up the space)
                    <br />
                    уп<u>а</u>сть / упад<u>а</u>ть - to fall (out of intended
                    area) (this is so often meant by "it fell" that упасть is
                    considered default perfective of п<u>а</u>
                    дать)
                    <br />
                    уложить / улагать (or укладывать) - place within certain
                    limits, a certain way, or covering a certain space (place to
                    bed, fix one's hair)
                    <br />
                    углядеть / углядывать - to spot, "to see at a spot", "to
                    look to upon something."
                    <br />
                    ухватить / ухватывать - to "grasp at," catch
                    <br />
                    унять / унимать - to take to (a baby), calm, quiet soothe
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">*вы- out (from within)</h2>
                    <br />
                    1. Emergence
                    <br />
                    2. The consequence of emergence, i.e. exhaustion or emptying
                    <br />
                    3. Emergence of a pattern
                    <br />
                    <br />
                    выпить / выпивать - to drink (something empty)
                    <br />
                    <Image
                        className="semantic-map-2"
                        src={вы}
                        alt="diagram"
                        width={imageWidth}
                        height={imageHeight}
                    ></Image>{" "}
                    Nesset, Tore, Anna Baydimirova, and Laura A. Janda. 2009.
                    Poljarnyj Vestnik 12 (January):72-84.
                    https://doi.org/10.7557/6.1294. <br />
                    <br />
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">*за- "over, beyond, into</h2>
                    <br />
                    <Image
                        className="prefix-image"
                        src={за_image}
                        alt="diagram"
                        width={imageWidth}
                        height={imageHeight}
                    ></Image>
                    <div className="text-adjacent">
                        1. Beyond a point of reference (behind it); to cover
                        over by action (action back-around) ["paint over"]
                        <br />
                        2. Beyond an entrance point ("in", emphasing "showing
                        up" rather than act of entering) ["come over"]
                        <br />
                        3. Beyond a point of reference (extremeness)
                        [equivilants in English ambiguous with пере-]
                        <br />
                        4. (esp. sound verbs) to start action
                        <br />
                        (You can search the cards for each of these roots to
                        compare)
                        <br />
                        <br />
                        закинуть / закидывать - throw over (cover by throwing
                        something)
                        <br />
                        забить / забивать - to beat in (e.g. a nail); or, to
                        stuff (one's mouth)
                        <br />
                        заколотить / заколачивать - to hammer over (close
                        something off by nailing boards over); to insert by
                        pounding; to begin pounding
                        <br />
                        закрутить / закручивать - start to spin; to spin
                        something into something (e.g. scew)
                        <br />
                        захватить / захватывать - "take over"
                        <br />
                        заглянуть / заглядывать - look into, look deep into the
                        details
                        <br />
                        заткнуться / затыкаться - to shut up (almost literally:
                        to stuff it) "Заткнись!"
                        <br />
                        <br />
                        открыть / открывать <i>versus</i> закрыть / закрывать -
                        to cover off (open), to cover over (close)
                        <br />
                        <br />
                        зажать / зажимать - to press over (зажимать рот рукой)
                        <br />
                        <br />
                        зайти / заходить - not merely "go behind" but "go over"
                        <br />
                        <br />
                        <br />
                        засомневаться - to begin to doubt" "Do not think of за
                        primarily as "behind"! This is a mistake in the history
                        of translating this word. It is "beyond" or "over," as
                        in "over those hills" or "beyond those hills." This
                        being the central meaning clarifies how за- the prefix
                        manages to encompass the meanings that it does, keeping
                        in mind of course, these are not one-to-one equivilants
                        ("over" in phrasal verbs often coindices with пере-, for
                        instance). One has to parse the meaning of the English
                        prepositions into multiple parts to organize the
                        connections. "Over" in the sense (one must imagine
                        things physical-visually, from whence language emerged
                        non-relativistically) of a path which extends above,
                        beyond, and landing on the other side of something--that
                        is the sense of за- which explains it meaning "behind,"
                        while also meaning "extremely", "into", and eventually
                        "start to." We even say, at times, in English "To go to
                        the store over bread" or "start a war over an argument",
                        which incorporates other aspects of за-, and explains
                        why they share the same word.
                        <br />
                        Use this image to imagine the connection between за's
                        meanings, and what a verb might mean.
                    </div>
                    <br />
                    <Image
                        className="semantic-map-1"
                        src={за_map}
                        width={imageWidth}
                        height={imageHeight}
                        alt="diagram"
                    ></Image>
                    "over", "behind", "beyond"
                    <br />
                    covering a distance, reaching a point, passing it, revealing
                    oneself to the other side, revealing the other side to
                    oneself
                    <br />
                    <br />
                    "солнце заходит за горы (acc)" - The sun is going (to) over
                    the mountains (going behind the mountains)
                    <br />
                    but also ;
                    <br />
                    "заходите сюда еще раз" - "Come over (here) again"
                    <br />
                    "over", therefore, in strictly physical meanings with motion
                    verbs means either "behind (over)" or "to our side of
                    something (over)", that is, "showing up somewhere." Really,
                    both meanings are the same, Russian uses other parts of the
                    sentence to specify whether the "over" is 'to' or 'fro.'"
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">*в(о)- "in, into</h2>
                    <br />
                    1. Entrance, insertion
                    <br />
                    [2. For words referring to 'standing up' (as if a sitting
                    person must stand up to 'enter' in the discussion)]
                    <br />
                    <br />
                    вкидывать / вкинуть - throw into
                    <br />
                    ворваться / врываться - tear into, rush into, burst in,
                    enter by force
                    <br />
                    вставить / вставлять - insert, put in
                    <br />
                    втолкнуть / вталкивать - push in, shove in, cram
                    <br />
                    влить / вливать - pour in, instill
                    <br />
                    вскочить / вскакивать - to jump up, to stand up quickly
                    <br />
                    встать / вставать - to arise, to stand up"
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">*при- "up to, to</h2>
                    <br />
                    1. Arrival
                    <br />
                    2. Small approach, small addition, small action
                    <br />
                    <br />
                    поднять / поднимать - to raise; приподнять / приподнимать -
                    to raise a little bit
                    <br />
                    прилить / приливать - add a little by pouring; arrive by
                    flowing "Кровь прилила к лицу."
                    <br />
                    приставить / приставлять - to place up to, place against
                    "Приставил пистолет к голове"
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">*от- "off, away, back"</h2>
                    <br />
                    1. Small departure, addition of small distance
                    <br />
                    2. Removal of small amount
                    <br />
                    3. (sometimes with +ся) cessation of action, or removal of
                    self from something
                    <br />
                    <br />
                    оторвать / отрывать - tear off, rip off, detach by pulling
                    or tugging
                    <br />
                    оторваться / отрываться - detach oneself (used to describe
                    shifting attention off something, with effort)
                    <br />
                    откинуться / откидываться - to throw oneself off, to roughly
                    lean back
                    <br />
                    <br />
                    When an verb refers to an action that has no direction, and
                    only occurs at a short distance, you can bet that от- is
                    likely to mean "finish doing", since movement off would mean
                    the creation of a distance across which it can't occur." "By
                    imagining a natural emphasis on that which is right in front
                    of us (where our eyes and hands point, and so our
                    attention), "off" or 'от' can mean "back" since it is "off
                    from the thing in front" implicitly."
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        *до- "unto, until, up to, out (finish)"
                    </h2>
                    <br />
                    1. Emphasizes the removal of final distance to some aim,
                    point, place, space, level
                    <br />
                    2. Emphasizes reaching a goal, measure
                    <br />
                    3. Pre- (before)
                    <br />
                    <br />
                    допить / допивать - drink till the end (notice that this
                    emphasizes reaching the end after a process, in contrast to
                    выпить which emphasizes emptying of the drink. It's a very
                    slight difference, not the end of the world!)
                    <br />
                    долить / доливать - to add by pouring (reaching, say, a
                    particular amount)
                    <br />
                    допечь / допекать - to bake unto the necessary amount, to
                    reach doneness in baking (emphasizes <i>reaching</i> an
                    amount, whereas напечь emphasizes amount merely in the sense
                    of quantity or extent, whether it be correct or surprising)
                    <br />
                    дожечь / дожигать - to burn until the end (e.g. a candle)"
                    "The abstract meanings of prefixes are conceivably later
                    derivatives of the realm of physical, movement meanings they
                    have. до- often can mean physically something is done unto
                    something (generally carrying a sense of 'small addition'),
                    or it can mean something was done unto <i>an amount</i>. The
                    same verb, like with all prefixes, can mean any of the
                    options, depending on context. One useful rule of thumb is
                    that if the clause (sentence) you find the prefixed verb in
                    contains the a preposition (e.g. перейти через, налить на,
                    вбить в, дойти до, вбить из, отойти к), you can suspect the{" "}
                    <i>physical</i> ;meaning (often listed first in this deck).
                    Without a prepositional phrase, which generally describe
                    movement directions, the prefix is more likely to not be
                    describing movement, but rather the more abstact senses of
                    the prefix (e.g. за- as extreme action, rather than
                    "behind")"
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">*на- "up, upon"</h2>
                    <br />
                    1. Up to a surface (onto a surface)
                    <br />
                    2. Into contact with a surface (bumping into, collision)
                    <br />
                    3. Up to a certain amount (emphasizes a quantity)
                    <br />
                    <br />
                    <br />
                    написать / написывать - to write (an amount)
                    <br />
                    напиться / напиваться - to drink one's fill, to get drunk
                    <br />
                    налететь / налетать - come flying to somewhere, to fly into
                    (e.g. a wall)
                    <br />
                    найти / находить - to walk upon, to come upon, i.e. to find
                    <br />
                    наговорить / наговаривать - to speak much of something
                    (quantity emphasis); to falsely accuse someone"
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        *о(бо)- about, around, mis-
                    </h2>
                    <br />
                    1. About or around something
                    <br />
                    2. Including all sides
                    <br />
                    3. (+ся) mistaken action (probably from 'об+ acc', meaning
                    "upon, up against)
                    <br />
                    4. Downward (synonymous with one sense of с-
                    <br />
                    <br />
                    оглянуть or оглядеть / оглядывать - to look about something,
                    look at all sides
                    <br />
                    оглядеться, оглянуться / оглядываться - to look about
                    oneself, i.e. look round, to look behind
                    <br />
                    <br />
                    <br />
                    ослышаться / -- - to mishear, to hear incorrectly
                    <br />
                    оговориться / оговариваться - to mispeak, make a mistake in
                    speech (wrong word etc.)
                    <br />
                    ошибиться / ошибаться - (to bump up against oneself) to be
                    mistaken"
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">*про- past, through</h2>
                    <br />
                    1. Through the points along a line
                    <br />
                    2. Through the point of interest &gt; accidentally beyond
                    point &gt; mistaken action
                    <br />
                    3. To engage in through a specific length of time
                    (emphasizes non-arbitrary length)
                    <br />
                    <br />
                    прор<u>е</u>зать / прорез<u>а</u>ть - cut through (from one
                    end of something to the other)
                    <br />
                    прокар<u>а</u>бкаться / прокар<u>а</u>бкиваться - to
                    scramble past (through)
                    <br />
                    пролить / проливать - to spill (something), etc.
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">*пере- "across, over"</h2>
                    <br />
                    1. Between two emphasis points (especially crossing 'over' a
                    border between)
                    <br />
                    2. From one instance of action, crossing into another (to do
                    something again, redo something)
                    <br />
                    3. Crossing the point of interest, doing something too much
                    <br />
                    <br />
                    пересмотреть / пересматривать - to rewatch, to watch again,
                    to watch over (and over)
                    <br />
                    перелить / переливать - (1) pour from one container, to
                    another, (3) overpour, to pour up too much, more than the
                    needed amount (2) to empty and fill again anew
                    <br />
                    переп<u>о</u>лнить / переполнять - fill up / fill over,
                    above a certain measure-- to overfill
                    <br />
                    перекричать / перекрикивать - to shout over, to shout loud
                    enough to drown out other sounds" "Meaning 2 is one of the
                    more <i>ad hoc</i> ;prefixes in use: you can fairly reliably
                    add that to whatever and it will work. It may be odd and
                    creative and non-standard, but it will 'work.'"
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">*под- "up, under, down"</h2>
                    <br />
                    1. Action occuring under ("upward")
                    <br />
                    2. Action aiming under ("downward"), or low down ;
                    <br />
                    3. Action as if underneath, following along, or supporting
                    in tandum
                    <br />
                    4. Action that is subversive, secretive, or subtle
                    <br />
                    <br />
                    поддержать / поддерживать- to hold under, i.e. to support
                    <br />
                    подбросить / подбрасывать - to throw upward; to throw
                    beneath; to secretly place something or plant fake evidence
                    (e.g. drugs)
                    <br />
                    поднять / поднимать - to raise up, "to take up"
                    <br />
                    подсказать / подсказывать - to help someone pronounce
                    something by saying it correctly quietly or subtly
                    <br />
                    поддакнуть / поддакивать - to utter affirmative words or
                    sounds in conversation as a token that the listener is
                    following along or agreeing
                    <br />
                    подвыть / подвывать - to howl in echo another's howling; to
                    howl or wail at a low drone, weakly" "Because с- already
                    takes up many meanings of "down", you'll rarely see this
                    mean "to under" or "down" and much more often see its other
                    sense, "upward" (since воз- is out of style for that, there
                    was a job opening)"
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        *воз- "up, above (also вз-, вос, вс)
                    </h2>
                    <br />
                    1. Upward movement, arising
                    <br />
                    2. (especially for movements that first went downward) re-,
                    again, bring back up (returnment)
                    <br />
                    3. Old prefix, not very in use, and so, remains with some
                    poetic or antiquated forms
                    <br />
                    <br />
                    <br />
                    вспомнить / вспоминать - recall, to bring back up into
                    memory
                    <br />
                    воссесть / восседать - dated/ironic way of saying "sit"
                    (solemnly)
                    <br />
                    восстановить / восстанавливать - renew, renovate,
                    reconstruct, restore
                    <br />
                    возникнуть / возникать - arise, appear, emerge, spring up
                    <br />
                    взять / взимать or взымать (or just брать) - literally "take
                    up", grab, acquire (as opposed to "take away" or "take off")
                    <br />
                    взметнуть or взметать / взмётывать - to hurl up (upwards)"
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        *недо- 1. Under-, insufficiently, poorly, without
                        reaching intended point
                    </h2>
                    <br />
                    <br />
                    недослушать / недослушивать - to listen inattentively, in
                    part, or not to the end
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        *из- forth, out (from within)
                    </h2>
                    <br />
                    1. Same as вы- but tends towards higher register, more
                    abstract senses
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        *пре- "forth, out (from the rest)
                    </h2>
                    <br />
                    1. Separation from a row by moving out of line
                    (exceedingness, totalness, breaking formation)
                    <div>
                        <br />
                    </div>
                    <div>
                        In older, speech (for instance liturgical language), can
                        be added to adjectives to strengthen them (similar to
                        Spanish "re-")
                    </div>
                    " As part of a latin loan word, it can be a transliteration
                    of Latin pre- (before, beforehand).
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">*пред- "before, fore-</h2>
                    <br />
                    1. In front of (передо мной = before me, "in front of me")
                    <br />
                    <br />
                    представиться / представляться - to put oneself before
                    someone, i.e. to introduce or present
                    <br />
                    предсказать / предсказывать - foretell, foresay"
                    <br />
                    <h1 className="mb-4 mt-6 text-6xl">Example Verbs</h1>
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        Example Verb: делать - to do/make
                    </h2>
                    сделать - often used as the perfective because the с- on
                    this verb denotes "coming together to form something", so,
                    when using the verb as in "to make" something, this is
                    generally the perfective. However, there also is used:
                    <br />
                    наделать / наделывать - to make (emphasizing quantity)
                    <br />
                    поделать / поделывать - to do (over some span of time), to
                    do in sequence a lot or a number of things"
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        Example Verb: лить - to pour
                    </h2>
                    полить - pour along (give a layer of liquid)
                    <br />
                    залить - pour beyond (pour beyond a reasonable point, i.e.
                    flood)
                    <br />
                    отлить - pour off (remove a small amount by pouring)
                    <br />
                    влить - pour in (insert somewhere by pouring)
                    <br />
                    вылить - pour out (remove from somewhere by pouring)
                    <br />
                    пролить - pour through (mistakenly pour out)
                    <br />
                    долить - pour unto (add to something by pouring; pour{" "}
                    <u>reaching</u> a specific extent)
                    <br />
                    прилить - pour to (add a little bit by pouring)
                    <br />
                    улить - pour at (pour all over a point, completely pour
                    over; e.g. so as to put out a fire)
                    <br />
                    излить - pour forth (вылить but tends towards poetic
                    meanings)
                    <br />
                    разлить - pour apart, pour out (distribute or spread apart
                    by pouring; spill by over pouring)
                    <br />
                    налить - pour up, pour on (fill by pouring, fill up to a{" "}
                    <u>particular amount,</u> ;pour on the surface of)
                    <br />
                    подлить - pour up (add by pouring, emphasising no longer
                    lesser, no longer lower amount)
                    <br />
                    облить - pour about (pour on all sides, cover all around by
                    pouring)
                    <br />
                    перелить - pour across (pour from one to another; to pour
                    too much; re-pour anew, pour again)
                    <br />
                    слить - pour off; pour with, pour together (to pour off a
                    surface; to combine by pouring) <br />
                    Ask yourself, what really is, how big is, and what is the
                    purpose of the difference between "pour in" and "pour up"
                    and "pour"
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        Example Verb: писать - to write
                    </h2>
                    написать / написывать - to write a certain amount (a book, a
                    message, a paragraph) (This is considered 'the perfective'
                    mostly because that is the way we tend to speak about
                    writing, in particular. That is the emphasis we tend to have
                    in mind. But not always:)
                    <br />
                    пописать / пописывать - to write for an arbitrary amount of
                    time
                    <br />
                    прописать / прописывать - to write through the course of
                    some amount of time
                    <br />
                    подписать / подписывать - to write beneath an additional bit
                    (e.g. to sign, subscribe)
                    <br />
                    отписать / отписывать - to finish writing, to inform by
                    message (send 'off' writing)
                    <br />
                    переписаться / переписываться - mutual writing across, i.e.
                    to exchange letters, write back and forth
                    <br />
                    уписать / уписывать - to find space for something written in
                    a given space, to fill a space with writing
                    <br />
                    дописать / дописывать - finish writing, to write unto some
                    kind of limit
                    <br />
                    приписать / приписывать - to write a bit in addition on the
                    side to something written, etc...
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        Example Verb: пить - to drink
                    </h2>
                    выпивать / выпить - to drink (something out, empty by
                    drinking) (This is considered 'the perfective' mostly
                    because that is the way we tend to speak about 'drinking',
                    in particular. That is the emphasis we tend to have in mind.
                    But not always:)
                    <br />
                    <br />
                    напить - to drink a certain amount (a bottle, a 12-pack, a
                    whole bar)
                    <br />
                    пропить - to drink for a certain amount of time, to drink
                    through (spend money on drinking) etc.
                    <br />
                    <br />
                    Here's a rather forced example:
                    <br />
                    Мы напили все три бутылки. (Wow, how much you drank!)
                    <br />
                    Мы пропили весь день все три бутылки. (Wow, how long it
                    took!)
                    <br />
                    Мы выпили все три бутылки. (Wow, all three are empty!)
                    <br />
                    <br />
                    This example illustrates the non-vital quality the prefixes
                    can take on. They mean things, but more than half the time
                    the meaning can be scrounged up from the context, when the
                    prefix can't be deciphered.
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        Example Verb: -п<u>о</u>лнить / полн<u>я</u>ть - to fill
                        [полный]
                    </h2>
                    As usual, -ять, when used to form imperfective branch verbs,
                    is stressed.
                    <br />
                    <br />
                    You'll tend to find that definitions of one of the following
                    simply list one of the others (e.g. "заполнить (v.):
                    наполнить"). This demonstrates a closeness in their meaning,
                    which would benefit us to note. It also demonstrates further
                    the non-crucial aspect of prefixes at times.
                    <br />
                    <br />
                    заполнить / заполнять - to fill completely; to fill in
                    (document's blank spaces)
                    <br />
                    переполнить / переполнять - overfill, fill such that
                    something crosses over the top
                    <br />
                    наполнить / наполнять - to fill up (fill completely)
                    <br />
                    <br />
                    дополнить / дополнять - to add unto, fill unto a specified
                    measure
                    <br />
                    <br />
                    пополнить / пополнять - to increase by adding, add what was
                    missing (arbitrary amount), fill a bit (along)
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">
                        Example Verb: п<u>о</u>мнить (-поминать) - to have in
                        memory
                    </h2>
                    помнить - to mind, to hold in memory
                    <br />
                    припомнить / припоминать - to bring to mind, to get back at
                    someone (bring back to mind for them how they wronged you)
                    <br />
                    вспомнить / вспоминать - recall, to bring back up into
                    memory
                    <br />
                    опомниться / опоминаться ;- to come about one's mind, to
                    mind about oneself (regain consciousness; to come to
                    understand one's mistake) <br />
                    упомянуть / упоминать (to mention, refer) is related, but
                    most of the помянуть forms are completely out of
                    recognition. ;
                    <br />
                    <br />
                    <h2 className="mt-6 text-3xl">Sound Verbs:</h2>
                    The Three Common Perfectives "Imperfective Unprefixed Root,
                    and
                    <br />
                    по- : To do for an arbitrary amount of time (for a bit, for
                    some time, a while)
                    <br />
                    за- : To begin
                    <br />
                    про- : To do for a specific amount of time (all night, all
                    class period, the whole conversation etc.)
                    <br />
                    <br />
                    Each of these is liable to be met, of course, in a branch
                    perfective form.
                    <br />
                    <br />
                    It is very common to see simple verbs put into
                    present-active-adverb-participle form ("<u>Doing</u> this,
                    he did this.", offset by commas), with one of these added.
                    So instead of "пищая" (squeaking; emphasing merely that the
                    action was occuring, no reference to time), you're much more
                    likely to see попискивая (same root, underlying -к-),
                    meaning "squeaking", but with an added sense of having some
                    nonspecific length in time over which action occured. Such
                    words may frequently not be found in any English dictionary,
                    and are reliably createable on-the-fly.
                    <br />
                    <h1 className="mb-4 mt-6 text-6xl">
                        New Word Aspect Recognition & Pair Derivation
                    </h1>
                    Prefixes perfectivize.
                    <br />
                    Suffixes imperfectivize.
                    <br />
                    Root Pairs have a pattern: lone verbs, especially -ить, tend
                    greatly to be imperfective. <br />
                    Pairs, however, tend to be<i> ;</i>"<i>per.</i> -ить /{" "}
                    <i>imp.</i> -ать" and ;<i> ;</i>"<i>perf. </i>
                    -нуть / <i>imp.</i> -ать."
                    <br />
                    All Branches can be navigated if you know where they started
                    from, but most branches can be navigated without knowing the
                    roots. ;
                    <br />
                    Pesky instances where the Root form coincides with Branch
                    forms ruin things:
                    <br />
                    While -ывать/-ивать guarantees an imperfective and is
                    recognizable, -ать -ять causes a conundrum. Is this a Root
                    verb ending in the letters "ать", gaining a prefix to become
                    perfective, or a Root verb gaining a prefix, and{" "}
                    <i>then the true suffix </i>ать, making it imperfective? One
                    must know the roots. ;
                    <br />
                    <br />A generalized example, using с- is shown here:
                    <br />
                    (с-+root) Perfective &gt;&gt; с-___ать &lt;&lt; Imperfective
                    (prefix-+root-+ать)
                    <br />
                    <i>If you know the root pair,</i> you can determine which is
                    the case.
                    <br />
                    сказать - perfective because казать + с<br />
                    укреплять - imperfective, because крепить + у + ять
                    <br />
                    <br />
                    Prefixed verbs ending in -ать/-ять verbs require the most
                    foreknowledge.
                    <br />
                    <br />
                    <br />
                    This is much more difficult to explain in words than it is
                    to understand and know. So, a bunch of examples will make it
                    clearer than an explanation:
                    <br />
                    <br />
                    (The following are random verbs taken from a book.) ;
                    <br />
                    <br />
                    "засунул" - perfective for sure, because prefix за, and
                    doesn't end in -ать
                    <br />
                    <br />
                    "договаривались" - imperfective, because -ивать, ;
                    <br />
                    <br />
                    "заблестели" - perfectice, because prefixed, no ambiguous
                    -ать
                    <br />
                    <br />
                    "вспомнился" - perfective, because вс-, no ambiguous -ать
                    (if you know your quirky-roots, you know its -помнить /
                    -поминать, and thus the pair вспоминаться)
                    <br />
                    <br />
                    "отталкивал" - imperfective, because although prefixed, has
                    -ивать <b>(there is no root verb "талкивать",</b> ;therefore
                    this must be толкать + от + ивать
                    <b>
                        )<br />
                    </b>
                    беседовали - imperfective, no prefix, it's a root verb, and
                    it's a root verb that doesn't come in a pair, doesn't end in
                    -нуть
                    <br />
                    <br />
                    "обшарпанной" (reverse engineer to обшарпать) - if you don't
                    know the root: most likely perfective, if you know the root
                    is шарпать, then definitely perfective (шарпать +
                    perfectivizing prefix), and you know its imperfective would
                    be обшарпывать
                    <br />
                    <br />
                    "разрешают" - imperfective (therefore present tense!),
                    because I know the root решить / решать uses the branches
                    -решить / -решать, therefore imperfective решить + раз- +
                    -ать = imperfective)
                    <br />
                    <br />
                    "внимательно" - this is an adjective, but -тельный replaces
                    -ть on verbs, so внимать is hidden in it, imperfective,
                    because I know the basal quirky-нять / -нимать
                    <br />
                    <br />
                    "останется" - perfective, cause prefixed, no -ать (from
                    стать, a single syllable -вать word, giving pair оставаться)
                    <br />
                    <br />
                    "опустевших" - опустеть (from пустой) - perfective, because
                    prefixed, no -ать.
                    <br />
                    пустеть - if you saw this word and didn't know anything
                    about it, (because of the -еть you could guess imperfective
                    for a high chance, but there is the <i>chance</i> ;you'd be
                    wrong. In this case, you wouldn't.
                    <br />
                    <br />
                    "выдержал" - perfective, because there is no держить,
                    держать is the root lone imperfective verb, therefore this
                    is perfective due to 1-step having been applied (add
                    perfectivizng prefix), with pair выдерживать. If you didn't
                    know the root, you wouldn't know whether it was hypothetical
                    *держить + вы + -ать, which would be an imperfective.
                    <br />
                    <br />
                    "прицелиться" - perfective, because при-, and I can be sure,
                    because -ить
                    <br />
                    <br />
                    "вереща" - You can tell its imperfective because its
                    prefix-less, if you know that it doesn't come in a pair.
                    (You also know for sure its imperfective if its in a present
                    tense participle form -а, -ая, or -ающий -ущий, -ящий etc.)
                    <br />
                    <br />
                    "обнажал" - This is hard. You have to know that it{" "}
                    <i>isn't</i> ;об+на+жать (which would be perfective). This
                    is actually обнажить / обнажать (from нагой). нажать{" "}
                    <i>also ;</i>exists, but it is жать plus на- (a whole
                    different tree). нажать does not exist <i>as a root. </i>It
                    is imperfective because it is -ать added to обнажить, or,
                    put otherwise, because it is the -ать in an -ать -ить pair.
                    <br />
                    <br />
                    "отшатнулся" - ; "-нуть" and prefix means surefire
                    perfective
                    <br />
                    <br />
                    "продолжалось" - Is <b>this verb </b>from ;должать? No. Then
                    this is something + -ать and therefore imperfective.
                    <br />
                    By contrast задолжать is perfective, from должать, and
                    therfore gain a prefix, but didn't gain a suffix. The
                    perfectivity can therefore depend on the context determining
                    which sense of the word is being used, but this is very rare
                    in Russian.
                    <br />
                    <br />
                    облипать - imperfective, because this is not a derivative of
                    a hypothetical "*липать", but rather липнуть + об + ать. If
                    *липать existed, it would 1) be a totally different
                    word/meaning than липнуть, and therefore 2) you could use
                    context to tell whether you were dealing with *липать + об
                    (perfective) or with липнуть + об + ать (imperfective)
                    <br />
                    <br />
                    "набрякло" - perfective, because -кло past tense could only
                    occur from -нуть (which is sometimes dropped completely to
                    form past tense, as in this case), prefix + нуть means
                    surefire perfective (набрякнуть)
                    <br />
                    <br />
                    избавиться - perfective, из+ prefix, no -ать, which means it
                    must be бавить + из (that doesn't tell you, though, that
                    it's -бавить, with hiphen, and that there is no word
                    "бавить")
                    <br />
                    <br />
                    "скомандовал" - perfective, because командовать + с. Some
                    native Russian verb pairs are ; -овать / -овать pairs
                    (indistinguishable), but generally with -овать the pair is
                    an unprefixed and prefixed (e.g. командовать /
                    скомандовать...) ;
                    <br />
                    <br />
                    "иссыхает" - Hard to tell. ис- prefix means it could be a
                    perfective *сыхать + из. One would have to simply know that
                    it comes from -сых<u>а</u>ть / -с<u>о</u>хнуть (compare -дых
                    <u>а</u>ть -дох<u>нут</u>ь). Thankfully, if it came from
                    *сыхать, one would likely have seen it ever anywhere else. ;
                    <br />
                    <br />
                    "воцарилось" - perfective, from prefix with no -ать. One
                    could guess the imperfective as either воцариваться or just
                    цариться.
                    <br />
                    <br />
                    "отправлялись" - Is this правлять + от (perfective)? No.
                    Such a word is unlikely anyway, since that вля reeks of
                    consonant mutation from -ять being added: making an
                    imperfective. Imperfective править &gt; perfective отправить
                    &gt; imperfective отправлять
                    <br />
                    <br />
                    ивать
                    <br />
                    ивать ;
                    <br />
                    ивать - always prefixed, always imperfective Branch verb,
                    very easy :)
                    <br />
                    <br />
                    If you know the Rootspace of a novel word, you can pull it
                    apart and find its aspect by knowing the order of
                    operations. "
                    <br />
                    <br />
                    <br />
                    сти and сть verbs раст<u>и</u> - рас<u>ту</u>, раст
                    <u>ё</u>шь, рас<u>тут</u>, (-растать)
                    <br />
                    вести - веду, ведёшь, ведут, (-водить: motion verb tree)
                    <br />
                    пасти - пасу, пасёшь, пасут, (-пасать)
                    <br />
                    трясти - трясу, трясёшь, трясут, (-трясать, see card)
                    <br />
                    цвести - цвету, цветёшь, цветут, (-цветать)
                    <br />
                    грести - гребу, гребёшь, гребут, (-гребать)
                    <br />
                    плести - плету, плетёшь, плетут, (-плетать)
                    <br />
                    гнести - гнету, гнетёшь, гнетут, (-гнетать)
                    <br />
                    <br />
                    ___сти - ___<i>C</i>у, ___<i>C</i>ёшь, ___<i>C</i>ут, (___-
                    <i>С</i>ать)
                    <br />
                    The consonant found in the imperfective branch form is the
                    same as revealed in the conjugations. ;
                    <br />
                    <br />
                    красть - краду, крадёшь, крадут, (-крадывать)
                    <br />
                    класть - кладу, кладёшь, кладут, (-кладывать)
                    <br />
                    сесть - с<u>я</u>ду, с<u>я</u>дешь, с<u>я</u>дут, (-седать,
                    etc.)
                </div>
            </main>
        </>
    );
};

export default tree_model;
