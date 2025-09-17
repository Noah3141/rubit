import React from "react";
import { api } from "~/trpc/server";
import VerbEntry from "./_components/VerbEntry";
import classNames from "classnames";
import styles from "./index.module.css";

const RussianVerbsPage = async () => {
    const verbs = await api.verbs.russian.getAll();
    verbs.items.sort(
        (a, b) => (b.commonality ?? 0.0) - (a.commonality ?? 0.0),
        // a.lemma < b.lemma ? -1 : a.lemma > b.lemma ? 1 : 0,
    );

    return (
        <div className={classNames(styles.page)}>
            <table className={classNames(styles.list)}>
                <thead className="text-left">
                    <tr>
                        <th>lemma</th>
                        <th>aspect</th>
                        <th>я</th>
                        <th>ты</th>
                        <th>они</th>
                        <th>pages-to-see</th>
                    </tr>
                </thead>
                <tbody className={classNames(styles.body)}>
                    {verbs.items.map((item) => (
                        <VerbEntry key={item.id} verb={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RussianVerbsPage;
