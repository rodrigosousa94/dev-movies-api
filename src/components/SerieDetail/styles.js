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
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0 ,0 , 0, 0));
  }
`


export const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;

  @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
      }

`

export const Cover = styled.div`

  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;

  img {
    width: 450px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 /20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;

    @media (max-width: 1020px) {
        width: 350px;
      }
      @media (max-width: 500px) {
        width: 200px;
      }

  }

`

export const Info = styled.div`

  padding: 20px;
  width: 50%;
  z-index: 99;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 500px) {
        width: 100%;
        align-items: center;
        text-align: center;
        
      }

  h2{
    color: #ffffff;
    font-size: 50px;
    font-weight: 700;

    @media (max-width: 1020px) {
      font-size: 40px;
      }

      @media (max-width: 500px) {
        font-size: 25px;
      }
  }

  p{
    color: #ffffff;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 30px;

    @media (max-width: 1020px) {
      font-size: 15px;
      }

      @media (max-width: 500px) {
        font-size: 12px;
      }
  }

`

export const ContainerMovies = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div{
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 20px 0;
    align-items: center;
 
  }

  h4{
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;

  }

  iframe{
    border: none;

    @media (max-width: 1020px) {
      width: 100%;
      }

      @media (max-width: 500px) {
        width: 80%;
      }
  }


`