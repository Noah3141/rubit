import classNames from "classnames";
import React, { type FC } from "react";
import { VocabularyListData } from "~/types/russian/list";
import styles from "./index.module.css";
import Header from "~/components/Base/Header";
import IPA from "~/components/Common/IPA";
import { CgClose } from "react-icons/cg";
import FrequencyLabel from "~/components/Common/FrequencyLabel";
import GPTSentencer from "~/components/Common/GPTSentencer";
import { MdBugReport } from "react-icons/md";
import Button from "~/components/Common/Button";

const EntryViewer: FC<{
    entry: VocabularyListData["entry_list"][0] | undefined;
    setEntry: React.Dispatch<
        React.SetStateAction<VocabularyListData["entry_list"][0] | undefined>
    >;
}> = ({ entry, setEntry }) => {
    return (
        <div className={classNames(styles.column, { [styles.open!]: !!entry })}>
            {!!entry && (
                <div className={classNames(styles.viewer)}>
                    <div className={classNames(styles.header)}>
                        <span>
                            <Header level="3">
                                {entry.model.lemma}{" "}
                                <FrequencyLabel>
                                    {entry.frequency}
                                </FrequencyLabel>
                            </Header>
                        </span>
                        <div
                            onClick={() => setEntry(undefined)}
                            className={classNames(styles.closeButton)}
                        >
                            <CgClose size={24} />
                        </div>
                    </div>
                    <div className={classNames(styles.altRepresentations)}>
                        <IPA>{entry.model.dictionary_info.ipa}</IPA>
                        <span className="font-serif">
                            {entry.model.lemma.replace("\u0301", "")}
                        </span>
                        <i>{entry.model.lemma.replace("\u0301", "")}</i>
                    </div>
                    <hr className="border-purple-700" />
                    <div className="flex flex-col gap-3">
                        <div></div>
                        <div>bar</div>
                        <GPTSentencer
                            token={entry.model.lemma}
                            language="Russian"
                        />
                    </div>

                    <div className="mt-24">
                        <Button color="red" size="small">
                            <MdBugReport
                                size={24}
                                className="fill-purple-500"
                            />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EntryViewer;
