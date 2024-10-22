import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    img{
        border-radius: 30px;
        width: 300px;
        height: 100%;

        @media (max-width: 500px) {
            width: 200px;
      }
    }

    h3{
        color: #ffffff;
        margin-top: 15px;

        @media (max-width: 500px) {
            font-size: 16px;
      }
    }

`
