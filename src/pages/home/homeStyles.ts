import styled from 'styled-components/native'
import { TextColor } from '../../styles/Colors'

export const PageTitleView = styled.View`
  margin: 16px 32px;
`

export const PageTitleText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${TextColor};
`
export const PhotoExampleWrap = styled.View`
  width: 100%;
  height: 420px;
  overflow: hidden;
  margin: 16px 0;
  border-radius: 10px;
`

export const PhotoExampleImage = styled.Image`
  transform: scale(1.25);
  width: 100%;
  height: 100%;
  top: 16px;
`

export const InfoMessage = styled.Text`
  font-size: 20px;
  color: ${TextColor};
`
