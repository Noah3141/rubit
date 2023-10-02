import OpenAI from "openai";
import { env } from "~/env.mjs";

export const getGPTExample = async (
    lemma: string,
): Promise<string | undefined> => {
    try {
        const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: `Write me an example Russian sentence that uses the word ${lemma}, followed by the English translation in parentheses.`,
                },
            ],
            temperature: 1.3,
            max_tokens: 100,
        });

        const outputLine = response.choices[0]?.message?.content ?? undefined;
        return outputLine;
    } catch (error) {
        // Handle any errors that occurred during the conversion or API request
        console.error(error);
        return undefined;
    }
};
