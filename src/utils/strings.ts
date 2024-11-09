export function toTitleCase(word: string): string {
    if (word.length < 2) {
        throw new Error("You've provided too short a word to toTitleCase");
    }

    return word[0]?.toUpperCase() + word.slice(1).toLowerCase();
}

/** Removes u301 */
export const unaccent = <T>({
    str,
    removeЁ = false,
}: {
    str: T;
    removeЁ?: boolean;
}): T => {
    if (typeof str == "string") {
        if (str.includes("ё") && removeЁ) {
            return str.replace("ё", "е").replace("\u0301", "") as T;
        } else {
            return str.replace("\u0301", "") as T;
        }
    } else return str;
};
