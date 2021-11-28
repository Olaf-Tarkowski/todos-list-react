import styled from "styled-components";

export const StyledSearch = styled.form`
    padding: 15px;
    border: 1px solid rgb(238, 237, 239);
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;

    @media (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`;

export const TaskSearch = styled.input`
    border: 1px solid rgb(238, 237, 239);
    padding: 10px;
`;