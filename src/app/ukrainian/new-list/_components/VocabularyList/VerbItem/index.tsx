import classNames from "classnames";
import React, { type FC, useState } from "react";
import { VerbEntry } from "~/types/ukrainian/list/verb";

import styles from "./index.module.css";
import IPA from "~/components/Common/IPA";
import FrequencyLabel from "~/components/Common/FrequencyLabel";
import GPTSentencer from "~/components/Common/GPTSentencer";
import Dropdown from "~/components/Containers/Dropdown";

const VerbItem: FC<{
    entry: VerbEntry;
}> = ({ entry }) => {
    return (
        <div>
            <>
                {" "}
                <FrequencyLabel>{entry.frequency}</FrequencyLabel> {entry.model.lemma}
                <IPA>{entry.model.dictionary_info.ipa}</IPA>
                <span className="text-lg">({entry.model.dictionary_info.is_perfective ? "pf." : "imp."})</span>
            </>
            <div className="w-full overflow-hidden rounded border border-neutral-600">
                <table className={classNames(styles.verbTable)}>
                    <thead>
                        <th className="w-36 px-3 py-1"></th>
                        <th className="min-w-36 px-3 py-1">Singular</th>
                        <th className="min-w-36 px-3 py-1">Plural</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-1 text-right">1st</td>
                            <td>{entry.model.dictionary_info.я_form ?? "-"}</td>
                            <td>{entry.model.dictionary_info.ми_form ?? "-"}</td>
                        </tr>
                        <tr>
                            <td className="p-1 text-right">2nd</td>
                            <td>{entry.model.dictionary_info.ти_form ?? "-"}</td>
                            <td>{entry.model.dictionary_info.ви_form ?? "-"}</td>
                        </tr>
                        <tr>
                            <td className="p-1 text-right">3rd</td>
                            <td>{entry.model.dictionary_info.він_form ?? "-"}</td>
                            <td>{entry.model.dictionary_info.вони_form ?? "-"}</td>
                        </tr>
                        <tr>
                            Missing other imperative
                            <td className="p-1 text-right">Imperative</td>
                            <td>{entry.model.dictionary_info.ти_imperative ?? "-"}</td>
                            <td>{entry.model.dictionary_info.ви_imperative}</td>
                        </tr>
                        <tr>
                            <td className="p-1 text-right">past tense</td>
                            <td>
                                <div className="flex flex-col gap-1">
                                    <span>{entry.model.dictionary_info.masc_past ?? "-"}</span>
                                    <span>{entry.model.dictionary_info.fem_past ?? "-"}</span>
                                    <span>{entry.model.dictionary_info.neut_past ?? "-"}</span>
                                </div>
                            </td>
                            <td>{entry.model.dictionary_info.plur_past ?? "-"}</td>
                        </tr>
                    </tbody>
                </table>
                <table className={classNames(styles.verbTable, "w-full")}>
                    <thead>
                        <th className="w-36"></th>
                        <th className="min-w-36">past</th>
                        <th className="min-w-36">present</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-1 text-right">passive</td>
                            <td>{entry.model.dictionary_info.past_passive ?? "-"}</td>
                            <td>{entry.model.dictionary_info.present_passive ?? "-"}</td>
                        </tr>
                        <tr>
                            <td className="p-1 text-right">active</td>
                            <td>{entry.model.dictionary_info.past_active ?? "-"}</td>
                            <td>{entry.model.dictionary_info.present_active ?? "-"}</td>
                        </tr>
                        <tr>
                            <td className="p-1 text-right">adverbial</td>
                            <td>{entry.model.dictionary_info.past_adverbial ?? "-"}</td>
                            <td>{entry.model.dictionary_info.present_adverbial ?? "-"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <GPTSentencer language="Ukrainian" token={entry.model.lemma} />
            </div>
            <div>Tree:</div>
        </div>
    );
};

export default VerbItem;
