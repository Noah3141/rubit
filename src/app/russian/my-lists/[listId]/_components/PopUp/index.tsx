import React, { useEffect, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { type VocabularyListData } from "~/types/russian/list";
import CloseButton from "~/components/Icons/CloseButton";

export type PopUpState =
    | { tab: "Flag"; entry: VocabularyListData["entry_list"][0] }
    | { tab: "Add Info"; entry: VocabularyListData["entry_list"][0] }
    | null;

const PopUp: FC<{
    state: PopUpState;
    setState: React.Dispatch<React.SetStateAction<PopUpState>>;
}> = ({ state, setState }) => {
    if (state == null) {
        return null;
    }
    return (
        <div className={classNames(styles.position)}>
            <div className={classNames(styles.container)}>
                <div className={classNames(styles.contents)}>
                    <div className={classNames(styles.header)}>
                        <div>
                            <h2 className={classNames(styles.title)}>
                                {state.entry.model.lemma}
                            </h2>{" "}
                        </div>
                        <CloseButton onMouseDown={() => setState(null)} />
                    </div>
                    <div className={classNames(styles.body)}>
                        <div className={classNames(styles.tabs)}>
                            <div
                                onClick={() => {
                                    setState(
                                        (p): PopUpState => ({
                                            entry: p!.entry,
                                            tab: "Add Info",
                                        }),
                                    );
                                }}
                                className={classNames(styles.tab, {
                                    [styles.selected!]: state.tab == "Add Info",
                                })}
                            >
                                Add Info
                            </div>
                            <div
                                onClick={() => {
                                    setState(
                                        (p): PopUpState => ({
                                            entry: p!.entry,
                                            tab: "Flag",
                                        }),
                                    );
                                }}
                                className={classNames(styles.tab, {
                                    [styles.selected!]: state.tab == "Flag",
                                })}
                            >
                                Flag
                            </div>
                        </div>

                        <div className={classNames(styles.viewedTab)}>
                            {
                                (
                                    {
                                        Flag: <></>,
                                        "Add Info": <></>,
                                    } as Record<
                                        typeof state.tab, // NonNullable<PopUpState>["tab"]
                                        React.ReactElement
                                    >
                                )[state.tab]
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
