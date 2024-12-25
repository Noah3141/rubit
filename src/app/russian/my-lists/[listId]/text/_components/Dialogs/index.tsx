import React, { useContext, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { type DialogState, DialogContext } from "../../context";
import Dialog from "~/components/Containers/Dialog";
import AddNewWord from "./AddNewWord";

const Dialogs: FC<{
    //
}> = ({}) => {
    const [state, setState] = useContext(DialogContext);
    return (
        <div className={classNames(styles.dialogs)}>
            <Dialog title="Add New Word" open={state.dialog == "AddNewWord"} setOpen={(v) => setState((p): DialogState => (v ? p : { dialog: null }))}>
                <AddNewWord />
            </Dialog>
        </div>
    );
};

export default Dialogs;
