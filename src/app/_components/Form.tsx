import { type FC, useState } from "react";
import Toggler, { type Option } from "~/components/Common/Toggler";

const Form: FC = () => {
    const viewOptions = [{ text: "All" }, { text: "Top" }, { text: "Bottom" }];
    const [form, setForm] = useState<{ view: Option }>({
        view: viewOptions[0]!,
    });

    return (
        <>
            <Toggler
                selected={form.view}
                options={viewOptions}
                onChange={(newVal) => {
                    setForm((p) => ({ ...p, view: newVal }));
                }}
            />
        </>
    );
};

export default Form;
