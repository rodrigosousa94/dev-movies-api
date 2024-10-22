import styled from "styled-components";

export const Title = styled.h4`

    color: #fff;
    font-size: 28px;
    font-weight: 700;

`


export const Container = styled.div`

    display: flex;
    margin-top: 30px;
    gap: 10px;

    @media (max-width: 1020px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }



    div{
        display: flex;
        flex-direction: column;
    }

    p{
        color: #ffffff;
    }

    img{
        width: 100px;
    }

`