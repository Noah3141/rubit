// !) INCOMING DATA MATCHES OUTGOING FROM RUST
// Raw Vocabulary
interface RawVocabularyList {
    entry_list: RawVocabEntry[];
    metadata: string;
}

interface RawVocabEntry {
    forms: string[];
    lemma: string;
    frequency: number;
    perfective: boolean | null;
}

// Verb Pairs
interface VerbPairList {
    entry_list: VerbPairEntry[];
    metadata: string;
}

interface VerbPairEntry {
    forms: string[];
    perfective_lemma: string;
    imperfective_lemma: string;
    frequency: number;
}

export default RawVocabularyList;
