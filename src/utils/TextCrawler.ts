type Segment = {
    type: "word" | "punctuation" | "whitespace";
    value: string;
};

export class TextCrawler {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    /** Yields either a word or a block of whitespace */
    public *iterator(): Generator<Segment, void, unknown> {
        const regex = /\S+|\s+/g; // Match words or whitespace blocks
        let match: RegExpExecArray | null;

        while ((match = regex.exec(this.text)) !== null) {
            const segment = match[0];

            if (/\s+/.test(segment)) {
                // Yield whitespace blocks
                yield { type: "whitespace", value: segment };
            } else {
                // Check if segment ends with punctuation
                const wordMatch = segment.match(/("?)(\S+?)([.,:?!…"»]+)?$/);
                if (wordMatch) {
                    const [_, punctuationFore, word, punctuationAft] =
                        wordMatch;

                    if (punctuationFore) {
                        yield { type: "punctuation", value: punctuationFore };
                    }

                    // Yield word part
                    if (word) {
                        yield { type: "word", value: word };
                    }
                    // Yield punctuation part, if it exists
                    if (punctuationAft) {
                        yield { type: "punctuation", value: punctuationAft };
                    }
                }
            }
        }
    }

    public map(callback: (chunk: Segment) => string): string {
        let result = "";

        for (const segment of this.iterator()) {
            result += callback(segment);
        }

        return result;
    }

    public forEach(callback: (chunk: Segment) => void): void {
        for (const segment of this.iterator()) {
            callback(segment);
        }
    }
}
