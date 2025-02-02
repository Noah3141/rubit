import classNames from "classnames";
import React, { type FC, useState } from "react";
import { AdjEntry } from "~/types/ukrainian/list/adjective";
import styles from "./index.module.css";
import IPA from "~/components/Common/IPA";
import FrequencyLabel from "~/components/Common/FrequencyLabel";
import GPTSentencer from "~/components/Common/GPTSentencer";
import Dropdown from "~/components/Containers/Dropdown";

const AdjectiveItem: FC<{
    entry: AdjEntry;
}> = ({ entry }) => {
    return (
        <div>
            <>
                {" "}
                <FrequencyLabel>{entry.frequency}</FrequencyLabel> {entry.model.lemma} <IPA>{entry.model.dictionary_info.ipa}</IPA>
            </>
            <div className="mx-auto w-full overflow-hidden rounded border border-neutral-600">
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
                                {entry.model.dictionary_info.acc_masc}/{entry.model.dictionary_info.nom_masc}
                            </td>
                            <td>{entry.model.dictionary_info.acc_neut}</td>
                            <td>{entry.model.dictionary_info.acc_fem}</td>
                            <td>
                                {entry.model.dictionary_info.acc_plur}/{entry.model.dictionary_info.nom_plur}
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
                            <td className="p-1 text-right">locative</td>
                            <td>{entry.model.dictionary_info.loc_masc}</td>
                            <td>{entry.model.dictionary_info.loc_neut}</td>
                            <td>{entry.model.dictionary_info.loc_fem}</td>
                            <td>{entry.model.dictionary_info.loc_plur}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <GPTSentencer language="Ukrainian" token={entry.model.lemma} />
            </div>
        </div>
    );
};

export default AdjectiveItem;
