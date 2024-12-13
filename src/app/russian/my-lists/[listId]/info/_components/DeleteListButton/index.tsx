"use client";

import React, { useEffect, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Button from "~/components/Common/Button";
import { useVocabularyList } from "~/layouts/VocabListSuite/context";
import toast from "react-hot-toast";
import { api } from "~/trpc/react";
import { usePathname, useRouter } from "next/navigation";

const DeleteListButton: FC<{
    //
}> = ({}) => {
    const vocabularyList = useVocabularyList();
    const pathname = usePathname();
    const router = useRouter();
    const utils = api.useUtils();

    const deleteList = api.list.delete.useMutation({
        onSuccess: async () => {
            await utils.list.invalidate();
            router.push("../");
            toast.success("List removed!", {
                id: "deleteListDialog",
                duration: 3000,
            });
            router.refresh();
        },
        onError: (e) => {
            console.error(e.message);
            toast.error("Something went wrong!", {
                id: "deleteListDialog",
                duration: 3000,
            });
        },
        onSettled: () => {
            setTimeout(() => {
                deleteList.reset();
            }, 3000);
        },
    });

    useEffect(() => {
        if (deleteList.status == "idle") {
            toast.dismiss("deleteListDialog");
        }
    }, [pathname, deleteList.status]);

    return (
        <Button
            status={deleteList.status}
            className={classNames(styles.deleteButton)}
            onClick={() => {
                toast(
                    (t) => {
                        return (
                            <div className={styles.deleteListButtonDialog}>
                                <div className={styles.prompt}>Are you sure? These things {`don't`} grow on trees...</div>
                                <div>{vocabularyList.title}</div>
                                <div className={styles.options}>
                                    <Button
                                        size="small"
                                        onClick={() => {
                                            toast.dismiss(t.id);
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        status={deleteList.status}
                                        size="small"
                                        onClick={() => {
                                            deleteList.mutate({
                                                listId: vocabularyList.id,
                                            });
                                        }}
                                    >
                                        Delete!
                                    </Button>
                                </div>
                            </div>
                        );
                    },
                    {
                        id: "deleteListDialog",
                        duration: 15_000,
                    },
                );
            }}
            color="red"
        >
            Delete List
        </Button>
    );
};

export default DeleteListButton;
