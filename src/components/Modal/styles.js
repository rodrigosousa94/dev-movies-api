import styled from "styled-components";


export const Background = styled.div`

    height: 100vh;
    width: 100vw;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    


`
export const Container = styled.div`

    background: #000000;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 50px;
    max-width: 1200px;

    @media (max-width: 1020px) {
        width: 100%;
      }

    span{
        font-size: 20px;
        color: #fff;
        cursor: pointer;
    }


    iframe {
        border: none;
    }

`