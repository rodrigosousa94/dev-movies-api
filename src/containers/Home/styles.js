import styled, { keyframes } from "styled-components";

const scale = keyframes`

    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }

`

export const Background = styled.div`

    background-image: url(${ (props) => props.img });
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;


    &::before {

        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0.5);

    }

 

`


export const Container = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 1500px;

    @media (max-width: 1020px) {
       flex-direction: column-reverse;
      }

`

export const Info = styled.div`

    z-index: 2;
    padding: 20px;
    width: 50%;

    @media (max-width: 1020px) {
        width: 100%;
      }

    h1 {
        font-size: 5rem;
        font-weight: 700;
        color: #ffffff;

        @media (max-width: 1020px) {
            font-size: 2rem;
            text-align: center;
      }

      @media (max-width: 500px) {
            margin-top: 160px;
      }

      @media (max-width: 320px) {
            margin-top: -50px;
            font-size: 1.5rem;
      }
    }

    p{
        font-size: 20px;
        font-weight: 500;
        color: #ffffff;
        margin-top: 30px;
        margin-bottom: 20px;

        @media (max-width: 1020px) {
            font-size: 18px;
            margin-top: 20px;
            text-align: center;
      }

      @media (max-width: 500px) {
            font-size: 12px;
            margin-top: 10px;

      }
      @media (max-width: 320px) {
        font-size: 12px;
        margin-top: 5px;
      }
    }

` 

export const Poster = styled.div`

    z-index: 2;


    img {
        width: 400px;
        border-radius: 30px;
        animation: ${scale} 0.5s linear;

        @media (max-width: 1020px) {
            width: 300px;
            margin-top: 80px;
            margin-bottom: -200px;
        }

        @media (max-width: 500px) {
            width: 200px;
            margin-bottom: -180px;
        }
        
        @media (max-width: 320px) {
            display: none;
      }
    }

`
export const ContainerButton = styled.div`

    display: flex; 
    gap: 20px;
    margin-top: 30px;


    @media (max-width: 1020px) {
            justify-content: center;
            align-items: center;
      }
`

