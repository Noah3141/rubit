import classNames from "classnames";
import React, { type FC } from "react";
import type { AdjEntry } from "~/types/russian/list/adjective";
import styles from "./index.module.css";

const AdjectiveForms: FC<{
    entry: AdjEntry;
}> = ({ entry }) => {
    return (
        <div className={classNames(styles.container)}>
            <table className={classNames(styles.adjTable)}>
                <thead>
                    <th className="px-3 py-1"></th>
                    <th className="px-3 py-1">Masculine</th>
                    <th className="px-3 py-1">Neuter</th>
                    <th className="px-3 py-1">Feminine</th>
                    <th className="px-3 py-1">Plural</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-1 text-right">nom.</td>
                        <td>{entry.model.dictionary_info.nom_masc}</td>
                        <td>{entry.model.dictionary_info.nom_neut}</td>
                        <td>{entry.model.dictionary_info.nom_fem}</td>
                        <td>{entry.model.dictionary_info.nom_plur}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">gen.</td>
                        <td>{entry.model.dictionary_info.gen_masc}</td>
                        <td>{entry.model.dictionary_info.gen_neut}</td>
                        <td>{entry.model.dictionary_info.gen_fem}</td>
                        <td>{entry.model.dictionary_info.gen_plur}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">acc.</td>
                        <td>
                            {entry.model.dictionary_info.acc_masc} / <br />
                            {entry.model.dictionary_info.nom_masc}
                        </td>
                        <td>{entry.model.dictionary_info.acc_neut}</td>
                        <td>{entry.model.dictionary_info.acc_fem}</td>
                        <td>
                            {entry.model.dictionary_info.acc_plur} /<br />
                            {entry.model.dictionary_info.nom_plur}
                        </td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">ins.</td>
                        <td>{entry.model.dictionary_info.ins_masc}</td>
                        <td>{entry.model.dictionary_info.ins_neut}</td>
                        <td>{entry.model.dictionary_info.ins_fem}</td>
                        <td>{entry.model.dictionary_info.ins_plur}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">pre.</td>
                        <td>{entry.model.dictionary_info.pre_masc}</td>
                        <td>{entry.model.dictionary_info.pre_neut}</td>
                        <td>{entry.model.dictionary_info.pre_fem}</td>
                        <td>{entry.model.dictionary_info.pre_plur}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">short</td>
                        <td>{entry.model.dictionary_info.m_short ?? "-"}</td>
                        <td>{entry.model.dictionary_info.n_short ?? "-"}</td>
                        <td>{entry.model.dictionary_info.f_short ?? "-"}</td>
                        <td>{entry.model.dictionary_info.p_short ?? "-"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdjectiveForms;
