import classNames from "classnames";
import React, { type FC } from "react";
import styles from "./index.module.css";
import { type VerbModel } from "~/types/russian/list/verb";

const VerbEntry: FC<{
    verb: VerbModel;
}> = ({ verb }) => {
    return (
        <tr className={classNames(styles.row)}>
            <td>{verb.lemma}</td>
            <td>{verb.dictionary_info.is_perfective ? "pf." : "imp."}</td>
            <td>{verb.dictionary_info.я_form}</td>
            <td>{verb.dictionary_info.ты_form}</td>
            <td>{verb.dictionary_info.они_form}</td>
            <td>
                {verb.commonality ? Math.ceil(1 / verb.commonality) : "N/A"}
            </td>
        </tr>
    );
};

export default VerbEntry;
