import React from "react";
import Header from "~/components/Base/Header";

const RussianPage = () => {
    return (
        <>
            <Header level="1">Русский</Header>
            <p>Добро пожаловать!</p>

            <Header level="2">To Do</Header>
            <ol className="list-disc ps-5">
                <li>Verify some kind of way to allow users to help fill out commonality scores that {`isn't...`} Completely arbitrary</li>
                <li>
                    Currently saved lists save a previous data state, and need some way of catching up to the back-end database when it acquires further data. (This means old
                    saved lists will completely lack new features, too)
                </li>
                <li>Writing exercise with input analysis, potentially syntax highlighting and word rarity scores to guide usage of wider vocabulary</li>
            </ol>

            <Header level="2">Changelog</Header>
            <Header level="3">12/22/2024</Header>
            <ol className="list-disc ps-5">
                <li>Developed the vaguest sense of taste and reduce UI horror</li>
                <li>
                    Neat improvements to Study tab allow use of Tab, Left Arrow, Right Arrow, and Enter to attempt to guess correct answer. This you can have it actually
                    strain your memory once it tells you that {`you've`} not thought of the word it wants.
                </li>
            </ol>

            <Header level="3">12/18/2024</Header>
            <ol className="list-disc ps-5">
                <li>
                    Upgraded Text Input Analyzer, and moved main form to Writing Workshop. This will как-то be combined with particular {`texts'`} pages and targeted writing
                    questions.
                </li>
            </ol>

            <Header level="3">12/13/2024</Header>
            <ol className="list-disc ps-5">
                <li className="font-bold">
                    Fixed ambiguous words in text analyzer gaslighting you with a guessed stress/meaning. These words now analyze if multiple interpretations exist, and only
                    label stress if one answer is possible. They then show you all found dictionary entries, such as &apos;начало&apos; showing both Noun and Verb meanings.
                </li>
                <li>Improved heat score labels to better shade from green to yellow to red. (perhaps the scale could shift according to user reported vocabulary size)</li>
                <li>Added a bit smarter logic to text analyzer (still wildly in progress, for future use in writing workshop)</li>
                <li>Fixed sign in flow page reactivity</li>
                <li>Labels for gender and perfectivity</li>
                <li>Some meanings will have been fixed, now showing specialized notes for some terms, like {`"regional"`}</li>
            </ol>

            <Header level="3">11/10/2024</Header>
            <ol className="list-disc ps-5">
                <li>Upgraded the testing system to show meanings, and allow difficulty setting</li>
                <li>Deleting lists added</li>
            </ol>

            <Header level="3">11/08/2024</Header>
            <ol className="list-disc ps-5">
                <li>
                    Improvements on syntax highlighter. It will be nearly impossible to make better than 80% accurate but some good educational use will definitely come out of
                    it.
                </li>
            </ol>
            <Header level="3">11/08/2024</Header>
            <ol className="list-disc ps-5">
                <li>Fixed auto-meanings in many broken cases!</li>
                <li>Adverbs are in!</li>
                <li>Work on case-syntax highlighter starting</li>
            </ol>
            <Header level="3">11/07/2024</Header>
            <ol className="list-disc ps-5">
                <li>Fixed certain punctuation parsing in the Text page for lists</li>
                <li>
                    Massive fix to data integrity: no longer missing verb infinitives, and {`ё's`} are now unnecessary in input text. (This will, I think, cause a small number
                    of errors, having solved many more)
                </li>
                <li>Fixed missing dative case from the entire app lol</li>
                <li>Fixed label problem for perfectivity vs gender</li>
            </ol>

            <Header level="3">11/06/2024</Header>
            <ol className="list-disc ps-5">
                <li>Changed the placing of the input text, and began adding a syntax highlighting system...</li>
                <li>Fixed some obscure aspect of login flow. Pressing {`'enter'`} now works</li>
                <li>Fixed various subroutes of vocab list repeatedly refetching the same data</li>
                <li>
                    Noticed a moderate sized hole in data coverage regarding verb infinitives which should only have broken: frequency counts in provided text, and syntax
                    highlighting. Will be fixed soon.
                </li>
                <li>Mobile formatting</li>
            </ol>

            <Header level="3">11/05/2024</Header>
            <ol className="list-disc ps-5">
                <li>Some styling changes that will all be thrown out later</li>
                <li>Better testing page now cycles items at random, while providing answer beneath</li>
                <li>Beginnings of a within-list navigation system, to jump between Study, Info, and Viewing the list</li>
                <li>Fixed adjectives not showing short forms</li>
                <li>
                    Updated styling for sorters, and changed them to work a bit more intuitively (frequency and commonality are descending, length and alphabetical are
                    ascending)
                </li>
                <li>
                    Flagging a word is now available, for, particularly, when the meaning section is messed up or missing. Later more input will be allowed, and we can compile
                    a verb Root Section dataset, which will unlock the potential for some further interesting metrics and pages
                </li>
            </ol>

            <Header level="3">10/28/2024</Header>
            <ol className="list-disc ps-5">
                <li>Added original text input to {`list's`}, along with their title (editability to come)</li>
                <li>
                    Database wipe had to occur in part due to a reset of data transfer methods intended to increase efficiency. You <i>may</i>
                    need to {`'sign out'`} of a no longer existant account, and sign up anew, if strange errors appear.
                </li>
                <li>A good bit of mobile functionality was improved, and prepared. Lists should be vaguely studyable on phone.</li>
                <li>
                    Added an autoupdate feature to fill the gaps of the initial WikiDump parsing. You may now see meanings labeled {`'autoparsed'`}. If these are strange, or
                    the meanings never end up loading, consider letting me know the word that led to the issue. In the future, if this stabilizes, I will shift this into a
                    local update, to minimize the {`app's`} need to ping the external wiki server.
                </li>
                <li>
                    Language {`nav's`} language name is now also a link to its home page, not just the top {`nav's`} (basic UX fix)
                </li>
            </ol>

            <Header level="3">10/26/2024</Header>
            <ol className="list-disc ps-5">
                <li>Added English meanings for approx 40,000 terms. This is quite substantial. High school vocabulary is allegedly around 20,000.</li>
                <li>
                    Began implementing a form that will allow various aspects of the information for given vocab terms to be flagged for verification, and filling in missing
                    data
                </li>
            </ol>

            <Header level="3">10/22/2024</Header>
            <ol className="list-disc ps-5">
                <li>
                    Added commonality rating to most vocabulary, statistically representing the chance of encountering the term in 1 page of a book, <i>on average</i>. This is
                    converted for now into {"number of pages needed to encounter"}, such that beginner vocab is near 1-5, and advanced vocab may have scores in the hundreds.
                </li>
                <li>Added sorting by commonality</li>
                <li>(Planned: commonality thresholds/borders)</li>
            </ol>
            <Header level="3">10/17/2024</Header>
            <ol className="list-disc ps-5">
                <li>Changed List UI to hold one visible vocab word to the side</li>
                <li>Added list sorting</li>
            </ol>
        </>
    );
};

export default RussianPage;
