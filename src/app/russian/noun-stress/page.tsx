import React from "react";
import Golova from "./Golova";
import Zemlya from "./Zemlya";
import Image from "next/image";
import Dvoynik from "./Dvoynik";
import Krov from "./Krov";
import Shest from "./Shest";
import Dvor from "./Dvor";

const NounStress = () => {
    return (
        <main>
            <div className="grid gap-6">
                <p>
                    Below I discuss nouns. {`I've`} looked at verbs just a bit in this same way, and have gotten nowhere. The short adjectives are the third territory, whose
                    stress is a nightmare, and which likely is the least structured of all—or perhaps not.
                </p>
                <p>
                    What I have found, ultimately, is that the difficult and unpredictable stress-movements that occur are statistically demonstrable as only occurring in
                    common words (the kind of finding everyone nods along with as if obvious only <i>after</i> {`it's`} been demonstrated, but whatever). This leads me to
                    suspect that if I collected the data, the adjectives would be something like 90% predictable in the language, with just a few hundred odd short forms.
                </p>
                <p>
                    Anyway, to the point, here I have broken down noun stress using a dataset of the 10,000 most common nouns pulled from a database I produced from
                    Wiktionary. Since the more rare words are extremely unlikely to have mobile stress or anything interesting to say, I would suggest that my numbers are
                    essentially representative of the true value, within a very small margin of error. Supposedly a total high school vocabulary is around 20,000 words, so
                    10,000 nouns is uh... Like all of 'em.
                </p>
            </div>
            <section className="mt-12 grid gap-6">
                <h1 className="font-bold underline">A refresher on the model</h1>
                <p>
                    Claim: Russian nouns have a very reliable stress structure, which splits singular and plural forms, that is, the singular forms all agree in stressed
                    position, and the plural all agree. (No one ever mentioned that to me !!!!)
                </p>
                <div>
                    <div>The stress position comes in two types: </div>
                    <div>
                        (1) <b>Early, </b>that is, some characteristic syllable<i> within the stem</i>;&nbsp;
                    </div>
                    <div>
                        (2) <b>Late</b>
                        {` `}
                        (a reframing of the research's use of the term "desinential", for the following reasons), where the stress falls on the ending as much{" "}
                        <i>as possible</i>. (This is different from saying {`"the last syllable"`}, e.g. {`"`}-<u>а</u>ми", of course, is always stress on the "a" when it is
                        stressed (apart from the "ьми" stuff, I know, stay with me here).
                    </div>
                </div>
                <div>I have devised the maximally compressed representation, seen in the following examples:</div>
                <div>
                    <div>
                        <u>vocab</u>&nbsp;&nbsp;<u>[singular, plural]</u>
                    </div>
                    <div>
                        <b>кошка </b>[early, early]
                    </div>
                    <div>
                        <b>
                            со<u>ю</u>з{" "}
                        </b>
                        [early, early]
                    </div>
                    <div>
                        <b>дом </b>[early, late]{" "}
                        <span className="opacity-40">
                            (дом, д<u>о</u>ма, д<u>о</u>му vs дом<u>а,</u>&nbsp;дом<u>о</u>в, дом<u>а</u>х)
                        </span>
                    </div>
                    <div>
                        <b>
                            ма<u>я</u>к{" "}
                        </b>
                        [late, late]{" "}
                        <span className="opacity-40">
                            (note here why I use the term "late" rather than ending stress, since the zero-ending causes 'the next latest thing' to be stressed)
                        </span>
                    </div>
                    <div>
                        <span>
                            <b>
                                пр<u>а</u>во{" "}
                            </b>
                            [early, late] <span className="opacity-40">(note the genitive zero ending causes "as late as possible" stress, all according to the system)</span>
                        </span>
                        <br />
                    </div>
                    <div>
                        <b>дверь </b>[early, late*]
                    </div>
                    <div>
                        <b>сад </b>[early, late]
                    </div>
                    <div>
                        <b>
                            широт<u>а</u>&nbsp;
                        </b>
                        [late, early]{" "}
                        <span className="opacity-40">
                            (широт<u>ы</u> versus шир<u>о</u>ты, шир<u>о</u>там, шир<u>о</u>т etc.)
                        </span>
                    </div>
                </div>
                <div>This is the general rule for most nouns. Indeed, 91% of nouns have the same stress in all forms.</div>
                <div>
                    Of the ~10% of nouns where the singular stress and the plural stress differ (lots of the commonest nouns),. In these, ~77% of the time the plural stress
                    jumps&nbsp;<i>later&nbsp;</i>in the word as in [early, late]. By contrast, 23% of the time are [late, early].
                </div>
                <div className="">
                    *Now... There are two caveats to the&nbsp;uniformity I've described of nouns' stress positions based on number (singular vs plural), which do not
                    constitute exceptions to the system, so much as tweaks to what {`"the system"`} is.{` `}
                    <i>
                        <b>That is to say, </b>
                    </i>
                    natives do not find these to be {`"exceptions"`} to rules, unlike truly odd forms like {`"`}кол<u>е</u>ц{`"`} (кольцо [late, early]
                    gen.plur.exc.).&nbsp;&nbsp;They just know these tweaks deep down, and do not run afoul of them. If no one explained these tweaks, you would likely form a
                    proper intuition for correct stress in all but the most common, wonky words. These wonky common words would be a forever source of unexplained confusion.
                    Two forms can misbehave from the rest of their number. They are:
                </div>
                <div>
                    <div>1) The singular accusative. (see statistical group 1 below)</div>
                    <div>2) The nominative plural. (see statistical group 2 below)</div>
                </div>
                <div>
                    In my notation I put the asterisk&nbsp;beside the number which exhibits&nbsp;the exception. For example, above the asterisk by "late" for дверь denotes
                    that it is nominative plural дв<u>е</u>ри, apart from the rest of the plurals двер<u>я</u>м, двер<u>е</u>й etc.
                </div>
                <div>As a result I have the following statistics from ~10,000 most common nouns (as determined by having processed dozens of books for frequencies).</div>
                <div>
                    (It should be noted that the stress of the uncommon locative case is sort of inherently on the ending, the paucal occurs in like 5 words with a notable
                    stress of its own час<u>а</u>, and eh... the partitive so far as I can think only occurs unstressed....)
                </div>
            </section>
            <hr className="mt-3 border-neutral-700" />
            <hr className="mt-3 border-neutral-700" />
            <section className="mt-12 grid gap-6">
                <div>
                    <h2 className="font-bold underline">The Stats</h2>
                </div>
                <h3 className="font-semibold italic">The Acc Sing Feminines</h3>
                <div>
                    1) There are <b>17 </b>words, all feminine, where the accusative singular has earlier stress, differing from the singulars. (~.2% of 10,000 words) That's
                    it. The accusative singular ever been a stress that didn't match the other singulars? It was one of these.
                </div>

                <div>
                    <div>Can occur in these variations:</div>
                    <div>[late*, late]</div>
                    <div>[late*, early]</div>
                </div>

                <div>
                    9 of these are simultaneously <i>also</i> part of group 2, explained below.
                </div>

                <div className="mx-auto w-fit">
                    <Golova />
                    <Zemlya />
                </div>
                <div>
                    Also note, that the accusative plural never really exhibits its own character. It either pulls from the nominative plural, or from the genitive plural,
                    according to animacy rules. Because of this, it is simpler and more accurate to say that, in the plurals, the <i>nominative plural</i> is all that might
                    misbehave, but the accusative plural can't be blamed for going along.
                </div>
                <div>
                    <Image className="max-w-48" width={600} height={800} alt="Chart for 'земля'" src={"/images/zemlyaexception.png"} />
                    <p>
                        This word is considered to have a true irregular form only in the genitive plural. This is because the strange accusative singular is from being part
                        of the magic 17: this is normal. However, the plural stress is <i>"early"</i> stress, yet for whatever reason the genitive plural has an unexpected
                        late stress. Notice the uniformity for the singulars <i>other than</i> that. This word can be labeled: <i>[late*, early] gen. plur. exception</i>
                    </p>
                </div>
                <div>
                    This first group, the accusative singular exceptions, should be isolated in {`learners'`} minds to prevent their oddity from implying that any other word
                    they ever learn might follow that pattern. These are <i>the</i> annoying Russian words for learners once they try free-flowing conversations.
                </div>
                <hr className="border-neutral-800" />
                <h3 className="font-semibold italic">The Early Nom Plur</h3>

                <div>
                    2) There are ~154 (1.54% of ~10,000) words (some shown above), of masculine and feminine (and a few neuters), where the nominative plural is an anomalous
                    early stress. Here is a group of them:
                </div>
                <div>
                    <div>Comes in:</div>
                    <div>[early, late*]</div>
                    <div>[late, late*]</div>
                </div>
                <div>
                    Note that groups 1 and 2 are the fundamental counter-expectational dynamics, and they both make for a stress that is <i>earlier</i> than what your
                    intuition would have generated from the rest of the forms. Put differently, if the stress is already <i>'early'</i> stress, it can't misbehave! This is why
                    the [sing, plur] labels only ever have asterisk on a 'late'.
                </div>
                <div className="mx-auto w-fit">
                    <Krov />
                </div>
                <div>They contain a lot of {`"-сть"`} ending nouns.</div>
                <div>I have yet to find a real reason for these being like this, nor any kind of way to guess.</div>
                <hr className="border-neutral-800" />
                <h3 className="font-semibold italic">The Hidden Late Masculines</h3>

                <div>
                    3) There are ~650 (6.4% of 10,000 nouns) masculine nouns with "hidden desinential stress", whereby the nominative singular has final syllable stress and a
                    nominative zero-ending (the consonant, basically), which does not tell the observer <i>whether or not</i> the true singular stress is on that final
                    nominative syllable ('early'), or on the ending ('late'). If the learner assumes the stress belongs where the nominative says, they will be corrected, in
                    the oblique cases, that the stress falls actually on the ending itself. About 240 of these are fleeting vowel instances, which are reasonably detectable
                    from nominative alone.
                </div>
                <div>
                    <div>Comes in:</div>
                    <div>[late, late] (but you wouldn't know from nominative singular!)</div>
                </div>
                <div>
                    That leaves 410 instances (as a slightly high estimate) of foot-gun style masculine nouns. (Truly not a huge number when you put it into a language
                    learning context! They're actually rather few!)
                </div>
                <div className="mx-auto w-fit">
                    <Dvoynik />
                    <Shest />
                    <Dvor />
                </div>
                <div>
                    I have checked the data and found that among the hidden desinential masculine nouns, there are a couple with irregular "ья" plurals, and apart from that
                    100% of them exhibit stress always on the ending (which is to say, in the plurals too).
                </div>
                <div>
                    "If it's a masculine noun with hidden stress on the <strong>singular</strong> ending's syllable, all the stresses are <i>late</i>." For instance, "топ
                    <u>о</u>р" with dative "топор
                    <u>у</u>" implies to a native that it is therefore "топор<u>а</u>м." Since there are no nominative plural (and definitely no accusative singular)
                    exceptions in these nouns, it also implies to them clearly it that it must be plural "топор<u>ы</u>," no funny business.
                </div>
                <div className="opacity-50">
                    A [early, late] masculine noun is normal. What I'm saying above is that a [late, ...] masculine noun where that late stress was hidden MUST be [late, late]
                </div>
                <hr className="border-neutral-800" />
                <div>
                    4) All the rest of Russian nouns, which are essentially normal, where the stress of the singular and the plural may or may not differ from each other, but
                    each follows their internal order.
                </div>
                <div>
                    <div>Comes in:</div>
                    <div>
                        [early, early] <span className="opacity-40">(what you could just call "static" stress)</span>
                    </div>
                    <div>
                        [early, late] <span className="opacity-40"> (common)</span>
                    </div>
                    <div>
                        [late, early]<span className="opacity-40"> (less common)</span>
                    </div>
                    <div>
                        [late, late] <span className="opacity-40"> (for feminine or neuter nouns this is regular, without the difficulty of masculine zero ending)</span>
                    </div>
                </div>
                <div>
                    Here, again, about 10% (~1,000 in dataset) of the time the two will differ, predominantly by a plural stress jumping later in the word, to the ending.
                </div>
                <div>
                    90% of the time in the dictionary, the stress simply doesn't move. That does not mean 90% of the time in speech of course, due to common words being more
                    likely to misbehave.
                </div>

                <div>
                    <iframe
                        className="min-h-96 w-full"
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSKc3GiRljU0lOgv4pUVG_pLsCyTeqV1q8DUNPBKgyufJ8QXu277SXHxDX8BoCPDCQkvYtHARAm1Y98/pubhtml?gid=2005473530&amp;single=true&amp;widget=true&amp;headers=false"
                    ></iframe>
                    <div className="opacity-40">The black middle column denotes differing stress between singular and plural</div>
                    <div className="opacity-40">(You can ctrl+f in this)</div>
                </div>

                <div>
                    <div>When you see the charts on Wiktionary, sometimes some options are provided:</div>
                    <div>
                        свеч<u>а</u> is [late, late*] with a dated alternative realization as [late, early]
                    </div>
                    <div>
                        вод<u>а</u> is [late, early] with a dated and obsolete realization as [late, late*]
                    </div>
                </div>
            </section>
            <hr className="mt-3 border-neutral-800" />
            <hr className="mt-3 border-neutral-800" />

            <section className="mt-6 grid gap-6">
                <div>
                    I would recommend that students seeking to resolve their mis-stressing syndrome knock these groups out "in order" so to speak. Learn group (1), and rest
                    assured that that oddity will never be seen in the rest of words they learn. Learn group (2), also very finite, and perhaps simultaneously learn group (3),
                    knowing that the two are mutually exclusive. The following should minimize confusion for students:
                </div>

                <div className="whitespace-pre-wrap font-mono">{`
               +-----------+
               |  Group 1  |   (17 very common basic crucial words)
               +-----------+
                    |
                    v
    +-----------+     +-----------+
    |  Group 2  |     |  Group 3  |  (Two very finite groups of mostly useful basic words)
    +-----------+     +-----------+
            \\           /
             \\         /
              v       v
              +-----------+
              |  Group 4  |  (The rest of the language, where singular and plural must be taught as нередко decoupled)
              +-----------+
                `}</div>
            </section>
        </main>
    );
};

export default NounStress;
