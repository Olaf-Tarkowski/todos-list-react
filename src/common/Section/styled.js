import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin-bottom: 5px;
`;

export const StyledHeader = styled.h2`
    display: grid;
    grid-template-columns: 1fr auto;
    font-size: 20px;
    margin: 0px;
    padding: 15px;
    border: 1px solid rgb(238, 237, 239);

    @media (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr;
    }

`;