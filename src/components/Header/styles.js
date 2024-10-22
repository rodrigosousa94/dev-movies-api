import styled from "styled-components";

export const Container = styled.div`

    z-index: 99;
    min-height: 100px;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    background-color: ${(props) => props.changeBackground ? '#000' : 'transparent'};
    transition: background-color 0.6s ease-in-out;
    

    img {
        width: 25%;

        @media (max-width: 500px) {
        width: 25%;
      }
    }

    @media (max-width: 500px) {
        padding: 5px 25px;
      }
`

export const Menu = styled.ul`

display: flex;
gap: 50px;
list-style: none;
`

export const Li = styled.li`

    font-weight: 600;
    cursor: pointer;
    font-size: 28px;
    position: relative;

    @media (max-width: 500px) {
        font-size: 22px;
      }

    a{
        color: #ffffff;
        text-decoration: none;
    }

    &::after{
        content: '';
        height: 3px;
        width: ${props => props.isActive ? '100%' : 0};
        background-color: #129b20;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translate(-50%);
        transition: width 0.5s ease-in-out;
    }

    &:hover::after{
        width: 100%;
    }
`

