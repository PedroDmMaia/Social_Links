import * as S from './styles'

type Props = {
  redeSocial: string
  children: string
}

export default function Link({ redeSocial, children }: Props) {
  return <S.Link href={redeSocial}>{children}</S.Link>
}
