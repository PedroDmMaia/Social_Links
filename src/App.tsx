import * as S from './styles'
import avatar from './assets/avatar-jessica.jpeg'
import Link from './Components/links'

export function App() {
  return (
    <>
      <S.EstiloGlobal />
      <S.Container>
        <S.Box>
          <S.ImageContainer>
            <S.Image src={avatar} alt="" />
          </S.ImageContainer>
          <div>
            <S.Name>Jessica Randall</S.Name>
            <S.Country>London, United Kingdom</S.Country>
          </div>
          <p>&quot;front-end developer and avid reader&ldquo;</p>
          <Link redeSocial="#">GitHub</Link>
          <Link redeSocial="#">Frontend Mentor</Link>
          <Link redeSocial="#">Linkedin</Link>
          <Link redeSocial="#">Twitter</Link>
          <Link redeSocial="#">Instagram</Link>
        </S.Box>
      </S.Container>
    </>
  )
}
