import React, { FC } from "react";
import Checkbox from "~/components/Common/Checkbox";
import { Sorter, type Filter } from "../../content";
import styles from "./index.module.css";
import classNames from "classnames";
import Header from "~/components/Base/Header";
import Select from "~/components/Common/Select";

const EntryControls: FC<{
    filter: Filter;
    setFilter: React.Dispatch<React.SetStateAction<Filter>>;
    sorter: Sorter;
    setSorter: React.Dispatch<React.SetStateAction<Sorter>>;
}> = ({ filter, setFilter, setSorter, sorter }) => {
    return (
        <div className={classNames(styles.column)}>
            <div className={classNames(styles.placement)}>
                <div className={classNames(styles.controls)}>
                    <div className={classNames(styles.filters)}>
                        <Header level="4">Filter</Header>
                        <div className={classNames(styles.option)}>
                            <Checkbox
                                onClick={() => {
                                    setFilter(
                                        (p): Filter => ({
                                            ...p,
                                            Verb: !p.Verb,
                                        }),
                                    );
                                }}
                                value={filter.Verb}
                            />
                            Verbs
                        </div>
                        <div className={classNames(styles.option)}>
                            <Checkbox
                                onClick={() => {
                                    setFilter(
                                        (p): Filter => ({
                                            ...p,
                                            Noun: !p.Noun,
                                        }),
                                    );
                                }}
                                value={filter.Noun}
                            />
                            Nouns
                        </div>
                        <div className={classNames(styles.option)}>
                            <Checkbox
                                onClick={() => {
                                    setFilter(
                                        (p): Filter => ({
                                            ...p,
                                            Adjective: !p.Adjective,
                                        }),
                                    );
                                }}
                                value={filter.Adjective}
                            />
                            Adjectives
                        </div>
                    </div>
                    <div className={classNames(styles.sorters)}>
                        <Header level="4">Sort</Header>

                        <Select
                            value={sorter satisfies Sorter}
                            onChange={(newVal) => {
                                setSorter(newVal as Sorter);
                            }}
                            options={
                                [
                                    "alphabetical",
                                    "frequency",
                                    "length",
                                    // "commonality",
                                ] satisfies Sorter[]
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntryControls;
