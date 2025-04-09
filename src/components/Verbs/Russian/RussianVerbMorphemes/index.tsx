import { FC } from "react";
import { VerbEntry } from "~/types/russian/list/verb";

const RussianVerbMorphemes: FC<{
    entry: VerbEntry;
}> = ({ entry }) => {
    return (
        <div>
            {!!entry.model.dictionary_info.prefix && `${entry.model.dictionary_info.prefix} - `}
            {!!entry.model.dictionary_info.root && `${entry.model.dictionary_info.root}`}
        </div>
    );
};

export default RussianVerbMorphemes;
