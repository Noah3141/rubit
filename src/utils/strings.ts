export function toTitleCase(word: string): string {
    if (word.length < 2) {
        throw new Error("You've provided too short a word to toTitleCase");
    }

    return word[0]?.toUpperCase() + word.slice(1).toLowerCase();
}
