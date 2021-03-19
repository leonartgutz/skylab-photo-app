import styled from 'styled-components/native'
import { primary } from './Colors'
import { calcRem } from '../utils/mixins'

interface BtnProps {
  readonly posLeft: boolean;
}

export const CheckBoxWrap = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  border: 1px solid white;
  background: black;
  opacity: 0.4;
`

export const RoundBtn = styled.Pressable<BtnProps>`
  width: 70px;
  height: 70px;
  position: absolute;
  border-radius: 100px;
  bottom: ${calcRem(7)};
  ${props => props.posLeft ? `left: ${calcRem(1)};` : `right: ${calcRem(1)};`}
  background: ${primary}
  justify-content: center;
  align-items: center;
`