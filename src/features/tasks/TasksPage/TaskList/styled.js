import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
    margin: 0px;
    padding: 10px;
    border: 1px solid rgb(238, 237, 239);
`;

export const Item = styled.li`
    padding: 10px;
    display: grid;
    grid-template-columns: 25px 1fr 25px;
    list-style-type: none;
    border-bottom: 1px solid rgb(238, 237, 239);

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const StyledButton = styled.button`
    font-size: 17px;
    transition: 0.5s;
    color: white;
    border: none;

    ${({ red }) => red && css`
        height: 30px;
        width: 30px;
        background-color: red;

        &:hover {
            background-color: rgba(255, 0, 0, 0.500);
        }
    `}

    ${({ green }) => green && css`
        height: 30px;
        width: 30px;
        font-size: 17px;
        background-color: green;

        &:hover {
            background-color: rgba(0, 128, 0, 0.500);
        }
    `}
`;

export const Content = styled.span`
    justify-self: start;
    align-self: center;
    padding-left: 10px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: rgb(0, 115, 131);
    &:hover{
        font-weight: 500
    }
`;