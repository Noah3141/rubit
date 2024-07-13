import Banner from "~/components/Base/Banner";
import Header from "~/components/Base/Header";
import P from "~/components/Base/P";
import CenteredLayout from "~/layouts/Centered";

export default async function Home() {
    return (
        <CenteredLayout>
            <Banner color="yellow">This app is gonna blow ur socks off</Banner>

            <Header level="1">Rubit</Header>
            <Header level="2">Vocabulary List Maker</Header>

            <P>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique architecto explicabo quasi, assumenda iure, quia
                quaerat porro aperiam voluptas reiciendis deserunt earum
                veritatis tempora sequi velit quidem veniam laborum
                voluptatibus!
            </P>
        </CenteredLayout>
    );
}
