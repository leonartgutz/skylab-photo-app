import styled from 'styled-components/native'

interface Props {
  readonly isCheck: boolean
}

export const CheckBoxWrap = styled.View<Props>`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  border: 1px solid white;
  background: ${props => props.isCheck ? 'green' : 'red'};
  opacity: 0.4;
`