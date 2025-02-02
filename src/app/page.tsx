import Banner from "~/components/Base/Banner";
import Header from "~/components/Base/Header";
import CenteredLayout from "~/layouts/Centered";

export default async function Home() {
    return (
        <CenteredLayout>
            <Banner color="green">This version is still under development. Check back again soon for the best version yet!</Banner>

            <Header level="1">Slavic Language Study</Header>
        </CenteredLayout>
    );
}
