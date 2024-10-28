import classNames from "classnames";
import React, { type FC } from "react";
import { type VerbEntry } from "~/types/russian/list/verb";

import styles from "./index.module.css";

const VerbForms: FC<{
    entry: VerbEntry;
}> = ({ entry }) => {
    return (
        <div className={classNames(styles.container)}>
            <table className={classNames(styles.verbTable)}>
                <thead>
                    <th className=""></th>
                    <th className="">past</th>
                    <th className="">present</th>
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
                        <td className="p-1 text-right">adv.</td>
                        <td>
                            {entry.model.dictionary_info.past_adverbial ?? "-"}
                        </td>
                        <td>
                            {entry.model.dictionary_info.present_adverbial ??
                                "-"}
                        </td>
                    </tr>
                </tbody>
                <thead>
                    <th className="py-1"></th>
                    <th className="px-3 py-1">Singular</th>
                    <th className="px-3 py-1">Plural</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-1 text-right">1st</td>
                        <td>{entry.model.dictionary_info.я_form ?? "-"}</td>
                        <td>{entry.model.dictionary_info.мы_form ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">2nd</td>
                        <td>{entry.model.dictionary_info.ты_form ?? "-"}</td>
                        <td>{entry.model.dictionary_info.вы_form ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">3rd</td>
                        <td>{entry.model.dictionary_info.он_form ?? "-"}</td>
                        <td>{entry.model.dictionary_info.они_form ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">Imp.</td>
                        <td>
                            {entry.model.dictionary_info.singular_imperative ??
                                "-"}
                        </td>
                        <td>{entry.model.dictionary_info.plural_imperative}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">past</td>
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
        </div>
    );
};

export default VerbForms;
