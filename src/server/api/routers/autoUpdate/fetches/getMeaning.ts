//
//
export async function getMeanings(token: string): Promise<string> {
    const res = await fetch(
        `https://en.wiktionary.org/w/api.php?action=parse&prop=text|title&format=json&prop=wikitext&page=${token}`,
    );

    const json = (await res.json()) as {
        parse: { title: string; pageid: number; wikitext: { "*": string } };
    };
    const wikitextDump = json.parse.wikitext["*"];

    if (!json.parse.title || !wikitextDump) {
        console.error(JSON.stringify(json));
        throw new Error(`Failed to parse meanings for token: ${token}`);
    }

    const russianSectionStart = wikitextDump.indexOf("==Russian==");
    const russianSectionOnward = wikitextDump.slice(russianSectionStart);
    const russianSectionEnd = russianSectionOnward.search(/\n\n==[^=]/g);
    const russianSection = russianSectionOnward.slice(
        0,
        russianSectionEnd ?? undefined,
    );

    const nounSectionOnward = russianSection.slice(
        russianSection.search(/\n(===|====)Noun(===|====)/g) ?? 0,
    );
    const nounSection = nounSectionOnward.slice(
        0,
        nounSectionOnward.search(/\n===[^=]/g),
    );

    const verbSectionOnward = russianSection.slice(
        russianSection.search(/\n(===|====)Verb(===|====)/g) ?? 0,
    );
    const verbSection = verbSectionOnward.slice(
        0,
        verbSectionOnward.search(/\n===[^=]/g),
    );

    const adjSectionOnward = russianSection.slice(
        russianSection.search(/\n(===|====)Participle(===|====)/g) ?? 0,
    );
    const adjSection = adjSectionOnward.slice(
        0,
        verbSectionOnward.search(/\n===[^=]/g),
    );

    const advSectionOnward = russianSection.slice(
        russianSection.search(/\n(===|====)Adverb(===|====)/g) ?? 0,
    );
    const advSection = advSectionOnward.slice(
        0,
        verbSectionOnward.search(/\n===[^=]/g),
    );

    const sections = nounSection + verbSection + adjSection + advSection;

    const meanings = sections
        .split("\n")
        .filter((line) => line.startsWith("#"))
        .join(" (autoparsed)\n");

    console.log(meanings);

    return meanings;
}
