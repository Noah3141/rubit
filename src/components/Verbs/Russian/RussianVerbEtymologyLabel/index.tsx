import { type FC } from "react";
import { type VerbEntry } from "~/types/russian/list/verb";

const RussianVerbEtymologyLabel: FC<{
    entry: VerbEntry;
}> = ({ entry }) => {
    return (
        <span>
            {!!entry.model.dictionary_info.prefix && `${entry.model.dictionary_info.prefix}-`}
            {!!entry.model.dictionary_info.root && `${entry.model.dictionary_info.root}`}
        </span>
    );
};

export default RussianVerbEtymologyLabel;
