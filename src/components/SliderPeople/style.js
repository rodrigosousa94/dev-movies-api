import styled from "styled-components";

export const Container = styled.div`

    background: #000000;
    padding: 0 20px;

    h2{
        color: #ffffff;
        font-size: 24px;
        margin: 50px 0 20px 20px;

        @media (max-width: 500px) {
            font-size: 18px;
      }
    }

    .swiper-wrapper {
        display: flex;
        cursor: pointer;
    }

`
