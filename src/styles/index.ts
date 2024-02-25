import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Inter", sans-serif;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${variaveis.offBlack};
`

export const Box = styled.div`
  width: 420px;
  height: auto;
  background-color: ${variaveis.darkGrey};
  padding: 48px;
  border-radius: 16px;

  p {
    color: ${variaveis.white2};
    text-align: center;
    padding: 28px 0 12px 0;
    font-size: 14px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 24px;
  }
`

export const Name = styled.h2`
  font-size: 24px;
  color: ${variaveis.white};
  letter-spacing: 0.5px;
  text-align: center;
  margin-bottom: 12px;
  font-weight: 700;
`

export const Country = styled.h3`
  font-size: 18px;
  color: ${variaveis.green};
  letter-spacing: 0.5px;
  text-align: center;
  font-weight: 600;
`

export const ImageContainer = styled.div`
  max-width: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
`

export const Image = styled.img`
  border-radius: 50%;
  width: 100%;
`
