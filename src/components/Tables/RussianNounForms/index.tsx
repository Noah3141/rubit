import classNames from "classnames";
import React, { type FC } from "react";
import type { NounModel } from "~/types/russian/list/noun";
import styles from "./index.module.css";

const NounForms: FC<{
    model: NounModel;
}> = ({ model }) => {
    return (
        <div className={classNames(styles.container)}>
            <table className={classNames(styles.nounTable)}>
                <thead>
                    <th className="w-36 px-3 py-1"></th>
                    <th className="px-3 py-1">Singular</th>
                    <th className="px-3 py-1">Plural</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-1 text-right">nominative</td>
                        <td>{model.dictionary_info.nom_sing ?? "-"}</td>
                        <td>{model.dictionary_info.nom_plur ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">genitive</td>
                        <td>{model.dictionary_info.gen_sing ?? "-"}</td>
                        <td>{model.dictionary_info.gen_plur ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">accusative</td>
                        <td>{model.dictionary_info.acc_sing ?? "-"}</td>
                        <td>{model.dictionary_info.acc_plur ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">dative</td>
                        <td>{model.dictionary_info.dat_sing ?? "-"}</td>
                        <td>{model.dictionary_info.dat_plur ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">instrumental</td>
                        <td>{model.dictionary_info.ins_sing ?? "-"}</td>
                        <td>{model.dictionary_info.ins_plur ?? "-"}</td>
                    </tr>
                    <tr>
                        <td className="p-1 text-right">prepositional</td>
                        <td>{model.dictionary_info.pre_sing ?? "-"}</td>
                        <td>{model.dictionary_info.pre_plur ?? "-"}</td>
                    </tr>
                    {!!model.dictionary_info.loc_sing && (
                        <tr>
                            <td>locative</td>
                            <td>{model.dictionary_info.loc_sing}</td>
                            <td></td>
                        </tr>
                    )}
                    {!!model.dictionary_info.paucal && (
                        <tr>
                            <td>paucal</td>
                            <td>{model.dictionary_info.paucal}</td>
                            <td></td>
                        </tr>
                    )}
                    {!!model.dictionary_info.vocative && (
                        <tr>
                            <td>vocative</td>
                            <td>{model.dictionary_info.vocative}</td>
                            <td></td>
                        </tr>
                    )}
                    {!!model.dictionary_info.par_sing && (
                        <tr>
                            <td>partitive</td>
                            <td>{model.dictionary_info.par_sing}</td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default NounForms;
