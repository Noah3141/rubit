export const getGPTExample = async (lemma: string) => {
    const res = await fetch(
        `https://toolkitapi-production.up.railway.app/russian/generate-sentence/${lemma}`,
        {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://rubit.vercel.app/",
            },
        },
    );

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.text();
};
