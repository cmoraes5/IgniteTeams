import { Container, Title, Subtitle } from "./styles"

type Prop = {
    title: string;
    subtitle: string;
}

export function Highlight({title, subtitle}: Prop){
    return(
        <Container>
            <Title>
                {title}
            </Title>
            <Subtitle>
                {subtitle}
            </Subtitle>
        </Container>
    )
}