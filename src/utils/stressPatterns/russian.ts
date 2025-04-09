import { VocabularyListData } from "~/types/russian/list";
import { NounEntry } from "~/types/russian/list/noun";

type StressLocation = "early" | "late";
export function russianNounStressLabel(noun: NounEntry): {
    sing: { stress: StressLocation; except: boolean } | null;
    plur: { stress: StressLocation; except: boolean } | null;
    label: string;
} | null {
    if (noun.model.type !== "Noun") {
        return null;
        throw new Error(`Wrong part of speech! ${noun.model.lemma}`);
    }

    if (!noun.model.dictionary_info.pre_sing) {
        return null;
        throw new Error(noun.model.lemma);
    }
    const singPrepIdx = noun.model.dictionary_info.pre_sing.indexOf("\u0301");
    const singStress: StressLocation = singPrepIdx == noun.model.dictionary_info.pre_sing.length - 1 ? "late" : "early";

    const whereTheAccentIsInAccSing = noun.model.dictionary_info.acc_sing!.indexOf("\u0301");
    const whereItShouldBeInThePrepSing = noun.model.dictionary_info.pre_sing.length - 1;
    const whereItIsInTheNomSing = noun.model.dictionary_info.nom_sing!.indexOf("\u0301");
    const singExcept = singStress == "late" && whereTheAccentIsInAccSing !== whereItShouldBeInThePrepSing && whereTheAccentIsInAccSing !== whereItIsInTheNomSing;

    const sing = {
        stress: singStress,
        except: singExcept,
    };

    if (!noun.model.dictionary_info.pre_plur) {
        return {
            sing,
            plur: null,
            label: `[${sing.stress}${sing.except ? "*" : ""}, _]`,
        };
    }

    const plurPrepIdx = noun.model.dictionary_info.pre_plur.indexOf("\u0301");
    const plurStress: StressLocation = plurPrepIdx == noun.model.dictionary_info.pre_plur.length - 2 ? "late" : "early";

    const plurExcept = plurStress == "late" && noun.model.dictionary_info.nom_plur!.indexOf("\u0301") !== noun.model.dictionary_info.pre_sing?.length - 1;

    const plur = {
        stress: plurStress,
        except: plurExcept,
    };

    return {
        sing,
        plur,
        label: `[${sing.stress}${sing.except ? "*" : ""}, ${plur.stress}${plur.except ? "*" : ""}]`,
    };
}
// dictionary_info: z.object({
//             lemma: z.string(),
//             ipa: z.string(),
//             gender: Gender,
//             // Forms
//             nom_sing: z.string().nullable(),
//             nom_plur: z.string().nullable(),
//             acc_sing: z.string().nullable(),
//             acc_plur: z.string().nullable(),
//             gen_sing: z.string().nullable(),
//             gen_plur: z.string().nullable(),
//             dat_sing: z.string().nullable(),
//             dat_plur: z.string().nullable(),
//             ins_sing: z.string().nullable(),
//             ins_plur: z.string().nullable(),
//             pre_sing: z.string().nullable(),
//             pre_plur: z.string().nullable(),
//         }),
//     }),
