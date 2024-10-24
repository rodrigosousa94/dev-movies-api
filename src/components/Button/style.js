import styled, { css } from "styled-components";

const buttonStyles = css`

    border: 3px solid #fff;
    background-color: transparent;
    color: #fff;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;

    &:hover{
        background-color: #fff;
        color: #ff0000;
    }

    @media (max-width: 500px) {
        padding: 10px 10px;
        font-size: 13px;
      }

      @media (max-width: 320px) {
        padding: 10px 10px;
        font-size: 10px;
      }


`


export const ButtonWhite = styled.button`

    ${buttonStyles}

`

export const ButtonRed = styled.button`

    ${buttonStyles}

    background-color: #ff0000;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &:hover{
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
        background-color: #ff0000;
        color: #fff;
        
    }

`