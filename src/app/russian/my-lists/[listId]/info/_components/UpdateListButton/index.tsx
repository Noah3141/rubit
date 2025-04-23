import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";
import Button from "~/components/Common/Button";
import { useRouter } from "next/navigation";
import { useVocabularyList } from "~/layouts/VocabListSuite/context";

const UpdateListButton: FC<{
    //
}> = ({}) => {
    const router = useRouter();
    const vocabularyList = useVocabularyList();

    const updateList = api.list.russian.update.useMutation({
        onMutate() {
            toast.loading(`Updating list...`, { id: "update-list" });
        },
        onError() {
            toast.error("Failed to update the list!", { id: "update-list" });
        },
        onSuccess() {
            toast.success("List updated!", { id: "update-list" });
            router.refresh();
        },
        onSettled() {
            updateList.reset();
        },
    });
    return (
        <div className={classNames(styles.button)}>
            <Button
                color="violet"
                onClick={() => {
                    updateList.mutate({ listId: vocabularyList.id });
                }}
            >
                Force Update
            </Button>
        </div>
    );
};

export default UpdateListButton;
