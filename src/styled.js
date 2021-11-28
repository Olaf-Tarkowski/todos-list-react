import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledList = styled.ul`
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 50px;
    background-color:rgb(0, 115, 131);
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
`;
export const StyledNavLink = styled(NavLink)`
    padding: 15px;
    text-decoration: none;
    color: white;
    &.active{
        font-weight: 700
    }
    &:hover{
        text-decoration: underline;
    }
`;