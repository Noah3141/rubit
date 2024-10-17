import classNames from "classnames";
import React, { type FC } from "react";
import { type VerbEntry } from "~/types/russian/list/verb";

import styles from "./index.module.css";

const VerbItem: FC<{
    entry: VerbEntry;
}> = ({ entry }) => {
    return (
        <div className="w-full overflow-hidden rounded border-violet-600">
            <table className={classNames(styles.verbTable)}>
                <thead>
                    <th className="w-36 px-3 py-1"></th>
                    <th className="min-w-36 px-3 py-1">Singular</th>
                    <th className="min-w-36 px-3 py-1">Plural</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-1 text-right">1st person</td>
                        <td>{entry.model.dictionary_info.я_form ?? "-"}</td>
                        <td>{entry.model.dictionary_info.мы_form ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">2nd person</td>
                        <td>{entry.model.dictionary_info.ты_form ?? "-"}</td>
                        <td>{entry.model.dictionary_info.вы_form ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">3rd person</td>
                        <td>{entry.model.dictionary_info.он_form ?? "-"}</td>
                        <td>{entry.model.dictionary_info.они_form ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">Imperative</td>
                        <td>
                            {entry.model.dictionary_info.singular_imperative ??
                                "-"}
                        </td>
                        <td>{entry.model.dictionary_info.plural_imperative}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">past tense</td>
                        <td>
                            <div className="flex flex-col gap-1">
                                <span>
                                    {entry.model.dictionary_info.masc_past ??
                                        "-"}
                                </span>
                                <span>
                                    {entry.model.dictionary_info.fem_past ??
                                        "-"}
                                </span>
                                <span>
                                    {entry.model.dictionary_info.neut_past ??
                                        "-"}
                                </span>
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
                        <td>
                            {entry.model.dictionary_info.past_passive ?? "-"}
                        </td>
                        <td>
                            {entry.model.dictionary_info.present_passive ?? "-"}
                        </td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">active</td>
                        <td>
                            {entry.model.dictionary_info.past_active ?? "-"}
                        </td>
                        <td>
                            {entry.model.dictionary_info.present_active ?? "-"}
                        </td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">adverbial</td>
                        <td>
                            {entry.model.dictionary_info.past_adverbial ?? "-"}
                        </td>
                        <td>
                            {entry.model.dictionary_info.present_adverbial ??
                                "-"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default VerbItem;
