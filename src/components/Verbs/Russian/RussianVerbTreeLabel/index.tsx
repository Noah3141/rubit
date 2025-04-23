import { FC } from "react";
import { VerbEntry, VerbModel } from "~/types/russian/list/verb";

const RussianVerbMorphemes: FC<{
    model: VerbModel;
}> = ({ model }) => {
    const { aspectual_pair, root, prefix, is_perfective } = model.dictionary_info;
    const perfectiveBranch = is_perfective ? root : aspectual_pair?.substring(prefix?.length ?? 0);
    const imperfectiveBranch = !is_perfective ? root : aspectual_pair?.substring(prefix?.length ?? 0);

    return (
        <span>
            [{perfectiveBranch}/-{imperfectiveBranch}]
        </span>
    );
};

export default RussianVerbMorphemes;
