import { api } from "~/trpc/server";
import Content from "./content";

const ListInfoPage = async ({ params }: { params: { listId: string } }) => {
    const russianVocabularyList = await api.list.russian.get({
        listId: params.listId,
    });

    return <Content vocabularyList={russianVocabularyList} />;
};

export default ListInfoPage;
