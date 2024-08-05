import classNames from "classnames";
import React, { FC, useState } from "react";
import { AdjEntry } from "~/types/belarusian/list/adjective";
import styles from "./index.module.css";
import IPA from "~/components/Common/IPA";
import FrequencyLabel from "~/components/Common/FrequencyLabel";

const AdjectiveItem: FC<{
    entry: AdjEntry;
}> = ({ entry }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            onClick={() => setOpen((p) => !p)}
            className={classNames(styles.item)}
        >
            <div className="flex flex-row items-center gap-3 text-2xl">
                <FrequencyLabel>{entry.frequency}</FrequencyLabel>{" "}
                {entry.model.lemma} <IPA>{entry.model.dictionary_info.ipa}</IPA>
            </div>
            <div
                className={classNames(styles.dropdown, {
                    [styles.open!]: open,
                })}
            >
                <div className="overflow-hidden">
                    <div className="p-3">
                        <div className="w-fit overflow-hidden rounded border border-violet-600">
                            <table className={classNames(styles.adjTable)}>
                                <thead>
                                    <th className="w-36 px-3 py-1"></th>
                                    <th className="min-w-36 px-3 py-1">
                                        Masculine
                                    </th>
                                    <th className="min-w-36 px-3 py-1">
                                        Neuter
                                    </th>
                                    <th className="min-w-36 px-3 py-1">
                                        Feminine
                                    </th>
                                    <th className="min-w-36 px-3 py-1">
                                        Plural
                                    </th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-1 text-right">
                                            nominative
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .nom_masc
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .nom_neut
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .nom_fem
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .nom_plur
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-1 text-right">
                                            genitive
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .gen_masc
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .gen_neut
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .gen_fem
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .gen_plur
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-1 text-right">
                                            accusative
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .acc_masc
                                            }
                                            /
                                            {
                                                entry.model.dictionary_info
                                                    .nom_masc
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .acc_neut
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .acc_fem
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .acc_plur
                                            }
                                            /
                                            {
                                                entry.model.dictionary_info
                                                    .nom_plur
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-1 text-right">
                                            instrumental
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .ins_masc
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .ins_neut
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .ins_fem
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .ins_plur
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-1 text-right">
                                            locative
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .loc_masc
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .loc_neut
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .loc_fem
                                            }
                                        </td>
                                        <td>
                                            {
                                                entry.model.dictionary_info
                                                    .loc_plur
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdjectiveItem;
