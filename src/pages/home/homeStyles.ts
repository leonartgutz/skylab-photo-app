import styled from 'styled-components/native'
import { BtnBg, TextColor, TextColorLight } from '../../styles/Colors'
import { calcRem } from '../../utils/mixins'

export const HomeBody = styled.View`
  padding: ${calcRem(1)} 0;
`

export const PageTitleText = styled.Text`
  font-size: ${calcRem(1.7)};
  font-weight: bold;
  color: ${TextColor};
  margin: 0 ${calcRem(2)};
`
export const PhotoExampleWrap = styled.View`
  width: 85%;
  height: 420px;
  overflow: hidden;
  margin: ${calcRem(1)} auto;
  border-radius: 10px;
`

export const PhotoExampleImage = styled.Image`
  transform: scale(1.25);
  width: 100%;
  height: 100%;
  top: ${calcRem(1)};
`

export const InfoMessage = styled.Text`
  font-size: ${calcRem(1.4)};
  color: ${TextColor};
  text-align: center;
  width: 100%;
  margin: ${calcRem(1)} 0;
  font-weight: bold;
`
export const SelectPhotoBtn = styled.Pressable`
  width: 85%;
  padding: ${calcRem(1.4)};
  background: ${BtnBg};
  border-radius: 20px;
  margin: 0 auto ${calcRem(2)} auto;
`
export const SelectPhotoBtnText = styled.Text`
  width: 100%;
  text-align: center;
  font-size: ${calcRem(1.25)};
  font-weight: bold;
  text-transform: uppercase;
  color: ${TextColor};
`
export const AgreementText = styled.Text`
  width: 100%;
  text-align: center;
  font-size: ${calcRem(0.6)};
  color: ${TextColorLight};
  font-weight: bold;
`
