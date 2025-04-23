import React, { useContext, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { type DialogState, DialogContext } from "../../context";
import Dialog from "~/components/Containers/Dialog";
import AddNewEntry from "./AddNewEntry";
import UpdateEntry from "./UpdateEntry";

const Dialogs: FC<{
    listId: string;
}> = ({ listId }) => {
    const [state, setState] = useContext(DialogContext);
    return (
        <div className={classNames(styles.dialogs)}>
            <Dialog
                title={`Add New Entry - ${state.dialog == "AddNewWord" && state.word}`}
                open={state.dialog == "AddNewWord"}
                setOpen={(v) => setState((p): DialogState => (v ? p : { dialog: null }))}
            >
                <AddNewEntry listId={listId} />
            </Dialog>
            <Dialog
                title={`Update Entry - ${state.dialog == "UpdateWord" && state.model.lemma}`}
                open={state.dialog == "UpdateWord"}
                setOpen={(v) => setState((p): DialogState => (v ? p : { dialog: null }))}
            >
                <UpdateEntry listId={listId} />
            </Dialog>
        </div>
    );
};

export default Dialogs;
