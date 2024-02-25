import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Link = styled.a`
  display: block;
  background-color: ${variaveis.Grey};
  margin-top: 2.5vh;
  border-radius: 8px;
  color: ${variaveis.white};
  padding: 14px;
  transition: all 0.5s;
  font-weight: bold;
  width: 100%;
  text-align: center;

  &: hover {
    background-color: ${variaveis.green};
    color: ${variaveis.offBlack};
  }
`
