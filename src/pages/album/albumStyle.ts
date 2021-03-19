import styled from 'styled-components/native'
import { primary } from '../../styles/Colors'
import { calcRem } from '../../utils/mixins'

export const AlbumBody = styled.View`
  width: 100%;
  height: 100%;
`

export const MenuArea = styled.View`
  width: 100%;
  padding: ${calcRem(1)};
  align-items: flex-end;
  margin-bottom: ${calcRem(1)};
`

export const AlbumWrap = styled.View`
  width: 100%;
  padding: ${calcRem(0.2)};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${calcRem(1)};
`

export const AlbumTitle = styled.Text`
  font-size: ${calcRem(1.3)};
  color: ${primary};
  margin-left: ${calcRem(2)};
  margin-bottom: ${calcRem(0.8)};
`

export const AlbumBtn = styled.Pressable`
  opacity: 0.3;
  margin-right: ${calcRem(0.5)};
`
export const AlbumPhotos = styled.View`
  width: 100%;
  flex-direction: row;
`
export const AlbumPhotoCardWrap = styled.Pressable`
  border-radius: 10px;
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin: ${calcRem(0.2)};
`

export const AlbumPhotoCardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: ${calcRem(0.4)};
  align-items: flex-end;
  justify-content: flex-end;
`