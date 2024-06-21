import { Title } from "../_components/text/title";
import { GridSelector } from "./_components/layout/grid-selector";

export default function Home() {
    return (
        <>
            <Title>app cidadão</Title>
            <GridSelector 
                options={[
                    {
                        to: "/hub/noticias",
                        title: "noticias",
                        icon: null,
                        activated: true,
                        appears: true
                    },
                ]}
            />
        </>
    );
}
  