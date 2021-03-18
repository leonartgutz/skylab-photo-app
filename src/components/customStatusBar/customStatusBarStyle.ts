import styled from 'styled-components/native'
import { primary } from '../../styles/Colors'
import Constants from 'expo-constants'

interface Props {
  readonly alt: boolean
}

export const StatusBarWrap = styled.View<Props>`
  background: ${props => props.alt ? primary : 'white'};
  height: ${Constants.statusBarHeight}px;
`
