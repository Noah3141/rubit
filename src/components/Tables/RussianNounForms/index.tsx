import classNames from "classnames";
import React, { type FC } from "react";
import type { NounEntry } from "~/types/russian/list/noun";
import styles from "./index.module.css";

const NounForms: FC<{
    entry: NounEntry;
}> = ({ entry }) => {
    return (
        <div className="w-full overflow-hidden rounded border border-violet-600">
            <table className={classNames(styles.nounTable)}>
                <thead>
                    <th className="w-36 px-3 py-1"></th>
                    <th className="min-w-36 px-3 py-1">Singular</th>
                    <th className="min-w-36 px-3 py-1">Plural</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-1 text-right">nominative</td>
                        <td>{entry.model.dictionary_info.nom_sing ?? "-"}</td>
                        <td>{entry.model.dictionary_info.nom_plur ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">genitive</td>
                        <td>{entry.model.dictionary_info.gen_sing ?? "-"}</td>
                        <td>{entry.model.dictionary_info.gen_plur ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">accusative</td>
                        <td>{entry.model.dictionary_info.acc_sing ?? "-"}</td>
                        <td>{entry.model.dictionary_info.acc_plur ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">instrumental</td>
                        <td>{entry.model.dictionary_info.ins_sing ?? "-"}</td>
                        <td>{entry.model.dictionary_info.ins_plur ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">prepositional</td>
                        <td>{entry.model.dictionary_info.pre_sing ?? "-"}</td>
                        <td>{entry.model.dictionary_info.pre_plur ?? "-"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default NounForms;
