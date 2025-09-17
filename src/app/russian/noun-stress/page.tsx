import React from "react";
import Golova from "./Golova";
import Zemlya from "./Zemlya";

const NounStress = () => {
    return (
        <main>
            <div className="mb-6 italic">(taken from email I've sent to Russian professors)</div>
            <div className="grid gap-6">
                <p>
                    Below I discuss nouns. {`I've`} looked at verbs just a bit in this same way, and have gotten nowhere. The short adjectives are the third territory, whose
                    stress is a nightmare, and which likely is the least structured of all--or perhaps not.
                </p>
                <p>
                    What I have found, ultimately, is that the difficult and unpredictable stress-movements that occur are statistically demonstrable as only occurring in
                    common words (the kind of finding everyone nods along with as if obvious only <i>after</i> {`it's`} been demonstrated, but whatever). This leads me to
                    suspect that if I collected the data, the adjectives would be something like 90% predictable in the language, with just a few hundred odd short forms.
                </p>
                <p>
                    Anyway, to the point, here I have broken down noun stress using a dataset of the 10,000 most common nouns pulled from a database I produced from
                    Wiktionary. Since the more rare words are extremely unlikely to have mobile stress or anything interesting to say, I would suggest that my numbers are
                    essentially representative of the true value, within a very small margin of error.
                </p>
            </div>
            <div className="mt-12 grid gap-6">
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
                <section>
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
                        <b>дом </b>[early, late] (дом, д<u>о</u>ме, д<u>о</u>му vs дом<u>а,</u>&nbsp;дом<u>о</u>в, дом<u>а</u>х)
                    </div>
                    <div>
                        <b>
                            ма<u>я</u>к{" "}
                        </b>
                        [late, late] (note here why I use the term "late" rather than ending stress, since the zero-ending causes 'the next latest thing' to be stressed)
                    </div>
                    <div>
                        <span>
                            <b>
                                пр<u>а</u>во{" "}
                            </b>
                            [early, late] (note the genitive zero ending causes "as late as possible" stress, all according to the system)
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
                        [late, early] (широт<u>ы</u> versus шир<u>о</u>ты, шир<u>о</u>там, шир<u>о</u>т etc.)
                    </div>
                </section>
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
                    natives do not find these to be {`"exceptions"`} to rules, unlike truly odd forms like {`"`}кол<u>е</u>ц{`"`}.&nbsp;&nbsp;They just know these tweaks deep
                    down, and do not run afoul of them. If no one explained these tweaks, you would likely form a proper intuition for correct stress in all but the most
                    common, wonky words. These wonky common words would be a forever source of unexplained confusion. Two forms can misbehave from the rest of their number.
                    They are:
                </div>
                <div>
                    <div>1) The singular accusative. (see statistical group 1 below)</div>
                    <div>2) The nominative plural. (see statistical group 2 below)</div>
                </div>
                <div>
                    In my notation I put the asterisk&nbsp;beside the number which exhibits&nbsp;the exception. For example, above the asterisk by "late" for дверь denotes
                    that it is nominative plural дв<u>е</u>ри, apart from the rest of the plurals двер<u>я</u>м, двер<u>е</u>й etc.
                </div>
                <div>
                    As a result I have the following statistics from ~10,000 most common nouns (as determined by having processed dozens of books for frequencies). Supposedly
                    a total high school vocabulary is around 20,000 words, so 10,000 nouns is uh... Like all of 'em.
                </div>
                <div>
                    (It should be noted that the stress of the uncommon locative case is sort of inherently on the ending, the paucal occurs in like 5 words with a notable
                    stress of its own час<u>а</u>, and eh... the partitive so far as I can think only occurs unstressed....)
                </div>
                <div>
                    <u>
                        <b>The Stats</b>
                    </u>
                </div>
                <div>
                    1) There are <b>17 </b>words, all feminine, where the accusative singular has earlier stress, differing from the singulars. (~.2% of 10,000 words) That's
                    it. The accusative singular ever been a stress that didn't match the other singulars? It was one of these.
                </div>

                <div>
                    <Golova />
                    <Zemlya />
                </div>
            </div>
        </main>
    );
};

export default NounStress;
