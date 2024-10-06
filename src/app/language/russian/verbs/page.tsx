import React from "react";
import { api } from "~/trpc/server";

const RussianVerbsPage = async () => {
    const verbs = await api.verbs.russian.getAll();
    verbs.items.sort((a, b) =>
        a.lemma < b.lemma ? -1 : a.lemma > b.lemma ? 1 : 0,
    );

    return (
        <div>
            {verbs.items.map((item) => (
                <div key={item.id}>{item.lemma}</div>
            ))}
        </div>
    );
};

export default RussianVerbsPage;
