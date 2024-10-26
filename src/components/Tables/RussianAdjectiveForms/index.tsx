import classNames from "classnames";
import React, { type FC } from "react";
import type { AdjEntry } from "~/types/russian/list/adjective";
import styles from "./index.module.css";

const AdjectiveForms: FC<{
    entry: AdjEntry;
}> = ({ entry }) => {
    return (
        <div className="mx-auto w-full overflow-hidden rounded border border-violet-600">
            <table className={classNames(styles.adjTable)}>
                <thead>
                    <th className="w-36 px-3 py-1"></th>
                    <th className="min-w-36 px-3 py-1">Masculine</th>
                    <th className="min-w-36 px-3 py-1">Neuter</th>
                    <th className="min-w-36 px-3 py-1">Feminine</th>
                    <th className="min-w-36 px-3 py-1">Plural</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-1 text-right">nominative</td>
                        <td>{entry.model.dictionary_info.nom_masc}</td>
                        <td>{entry.model.dictionary_info.nom_neut}</td>
                        <td>{entry.model.dictionary_info.nom_fem}</td>
                        <td>{entry.model.dictionary_info.nom_plur}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">genitive</td>
                        <td>{entry.model.dictionary_info.gen_masc}</td>
                        <td>{entry.model.dictionary_info.gen_neut}</td>
                        <td>{entry.model.dictionary_info.gen_fem}</td>
                        <td>{entry.model.dictionary_info.gen_plur}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">accusative</td>
                        <td>
                            {entry.model.dictionary_info.acc_masc}/
                            {entry.model.dictionary_info.nom_masc}
                        </td>
                        <td>{entry.model.dictionary_info.acc_neut}</td>
                        <td>{entry.model.dictionary_info.acc_fem}</td>
                        <td>
                            {entry.model.dictionary_info.acc_plur}/
                            {entry.model.dictionary_info.nom_plur}
                        </td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">instrumental</td>
                        <td>{entry.model.dictionary_info.ins_masc}</td>
                        <td>{entry.model.dictionary_info.ins_neut}</td>
                        <td>{entry.model.dictionary_info.ins_fem}</td>
                        <td>{entry.model.dictionary_info.ins_plur}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">prepositional</td>
                        <td>{entry.model.dictionary_info.pre_masc}</td>
                        <td>{entry.model.dictionary_info.pre_neut}</td>
                        <td>{entry.model.dictionary_info.pre_fem}</td>
                        <td>{entry.model.dictionary_info.pre_plur}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdjectiveForms;
