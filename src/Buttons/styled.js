import styled from "styled-components";

export const StyledButtons = styled.div`

    @media (max-width: 600px) {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;

export const Button = styled.button`
    font-size: 17px;
    transition: 0.5s;
    border: none;
    background-color: transparent;
    color: rgb(0, 115, 131);

    &:hover{
        background-color: transparent;
        color: rgba(0, 116, 131, 0.500);
    }

    &:disabled{
        color: rgb(119, 119, 119);
    }
`;