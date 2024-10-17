"use client";

import React, { useState, type FC } from "react";
import Button from "~/components/Common/Button";
import type { VocabularyListData } from "~/types/russian/list";

const Content: FC<{
    vocabularyList: VocabularyListData;
}> = ({ vocabularyList }) => {
    vocabularyList.entry_list.sort((a) => -a.frequency);

    const [testIdx, setTestIdx] = useState(0);

    return (
        <div className="flex flex-col gap-6">
            <div>{vocabularyList.entry_list[testIdx]?.model.lemma}</div>
            <div className="flex flex-row gap-3">
                <Button
                    onClick={() => {
                        setTestIdx((p) => {
                            if (!!vocabularyList.entry_list[p + 1]) {
                                return p + 1;
                            } else {
                                return 0;
                            }
                        });
                    }}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default Content;
