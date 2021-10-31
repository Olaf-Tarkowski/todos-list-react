import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 15px;
    border: 1px solid rgb(238, 237, 239);
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 15px;

    @media (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`;

export const NewTasks = styled.input`
    border: 1px solid rgb(238, 237, 239);
    padding: 10px;
`;

export const StyledButton = styled.button`
    font-size: 17px;
    transition: 0.5s;
    color: white;
    border: none;
    padding: 10px 15px;
    background-color: rgb(0, 115, 131);

    &:hover{
        transform: scale(1.1);
        background-color: rgba(0, 116, 131, 0.788);
    }

    &:active{
        background-color: rgb(14, 104, 116);
        color: rgb(173, 173, 173);
    }
`;