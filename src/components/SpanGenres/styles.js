import styled from "styled-components";


export const Container = styled.div`

    display: flex;
    margin-top: 30px;
    gap: 10px;

    @media (max-width: 1020px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

      }


    span{
        padding: 10px 18px;
        border: 2px solid #fff;
        border-radius: 30px;
        font-size: 12px;
        font-weight: 600;
        background-color: #0f0f0f;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 500px) {
            padding: 4px 15px;
            font-size: 12px;
      }
    }

`