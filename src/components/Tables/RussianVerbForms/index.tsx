import classNames from "classnames";
import React, { type FC } from "react";
import { VerbModel, type VerbEntry } from "~/types/russian/list/verb";

import styles from "./index.module.css";

const VerbForms: FC<{
    model: VerbModel;
}> = ({ model }) => {
    return (
        <>
            <div className={classNames(styles.container)}>
                <table className={classNames(styles.verbTable)}>
                    <thead>
                        <th className=""></th>
                        <th className="">Past</th>
                        <th className="">Present</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-1 text-right">passive</td>
                            <td>{model.dictionary_info.past_passive ?? "-"}</td>
                            <td>{model.dictionary_info.present_passive ?? "-"}</td>
                        </tr>
                        <tr>
                            <td className="p-1 text-right">active</td>
                            <td>{model.dictionary_info.past_active ?? "-"}</td>
                            <td>{model.dictionary_info.present_active ?? "-"}</td>
                        </tr>
                        <tr>
                            <td className="p-1 text-right">adv.</td>
                            <td>{model.dictionary_info.past_adverbial ?? "-"}</td>
                            <td>{model.dictionary_info.present_adverbial ?? "-"}</td>
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
                            <td>{model.dictionary_info.я_form ?? "-"}</td>
                            <td>{model.dictionary_info.мы_form ?? "-"}</td>
                        </tr>
                        <tr>
                            <td className="p-1 text-right">2nd</td>
                            <td>{model.dictionary_info.ты_form ?? "-"}</td>
                            <td>{model.dictionary_info.вы_form ?? "-"}</td>
                        </tr>
                        <tr>
                            <td className="p-1 text-right">3rd</td>
                            <td>{model.dictionary_info.он_form ?? "-"}</td>
                            <td>{model.dictionary_info.они_form ?? "-"}</td>
                        </tr>
                        <tr>
                            <td className="p-1 text-right">Imp.</td>
                            <td>{model.dictionary_info.singular_imperative ?? "-"}</td>
                            <td>{model.dictionary_info.plural_imperative}</td>
                        </tr>
                        <tr>
                            <td className="p-1 text-right">past</td>
                            <td>
                                <div className="flex flex-col gap-1">
                                    <span>{model.dictionary_info.masc_past ?? "-"}</span>
                                    <span>{model.dictionary_info.fem_past ?? "-"}</span>
                                    <span>{model.dictionary_info.neut_past ?? "-"}</span>
                                </div>
                            </td>
                            <td>{model.dictionary_info.plur_past ?? "-"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default VerbForms;
