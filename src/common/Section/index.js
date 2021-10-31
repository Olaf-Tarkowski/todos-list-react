import { StyledSection, StyledHeader } from "./styled"

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledHeader>{title}
            {extraHeaderContent}
        </StyledHeader>
        {body}
    </StyledSection>
);

export default Section;