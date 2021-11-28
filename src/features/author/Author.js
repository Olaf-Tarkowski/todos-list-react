import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { StyledSection } from "./styled";

function Author() {

    return (
        <Container>
            <Header title="O autorz" />
            <Section
                title="Olaf Tarkowski"
                body={<>
                    <StyledSection>
                        <p><strong>Cześć, Olaf z tej strony.</strong></p>Skono znajdujesz się w tej zakładce to oznacza że chciał byś się o mnie dowiedzieć.
                        Pochodzę z Lublina, mam 24 lata i wpaniałego kotka Dodzie. Interesuję się motoryzacją i wszelkiego rodzaju sportami.

                    </StyledSection></>}
            />
        </Container>
    );
};

export default Author;