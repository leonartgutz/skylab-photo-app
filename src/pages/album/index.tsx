import React from 'react'
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Camera } from 'expo-camera'
import CustomStatusBar from '../../components/customStatusBar'
import { AlbumBody, AlbumBtn, AlbumPhotoCardImage, AlbumPhotoCardWrap, AlbumPhotos, AlbumTitle, AlbumWrap, MenuArea } from './albumStyle'
import { primary } from '../../styles/Colors'
import CustomCheckBox from '../../components/customCheckBox'
import { RoundBtn } from '../../styles/global'

interface Props {
  history: any
}

const imageList: object[] = [
  {
    titleName: '1Touch',
    images: [require('../../../assets/photo-1.png')]
  },
  {
    titleName: 'Album Name',
    images: [require('../../../assets/photo-2.png'), require('../../../assets/photo-3.png'), require('../../../assets/photo-4.png')]
  },
  {
    titleName: 'Album Name',
    images: [require('../../../assets/photo-5.png'), require('../../../assets/photo-6.png')]
  },
  {
    titleName: 'Album Name',
    images: [require('../../../assets/photo-1.png')]
  }
]

const Album: React.FC<Props> = ({ history }) => {

  const handleOpenCamera = async (): Promise<void> => {

    const { status } = await Camera.requestPermissionsAsync()

    if (status === 'granted') {
      history.push('/camera')
    }  
  }

  return <>
    <CustomStatusBar alt />
    <AlbumBody>
      <MenuArea>
        <Ionicons name="ios-menu" size={32} color={primary} />
      </MenuArea>

      {imageList.map((album: any, key: number) => (
        <AlbumWrap key={key}>
          <AlbumTitle>{album.titleName}</AlbumTitle>

          <AlbumBtn>
            <MaterialIcons name="navigate-next" size={32} color={primary} />
          </AlbumBtn>

          <AlbumPhotos>
            {album.images.map((image: any, imageKey: number) => (
              <AlbumPhotoCardWrap key={imageKey}>
                <AlbumPhotoCardImage source={image}>
                  <CustomCheckBox />
                </AlbumPhotoCardImage>
              </AlbumPhotoCardWrap>
            ))}
          </AlbumPhotos>

        </AlbumWrap>
      ))}
      
      <RoundBtn posLeft={false} onPress={handleOpenCamera}>
        <MaterialCommunityIcons name="camera-plus" size={40} color="white" />
      </RoundBtn>
    </AlbumBody>
  </>
}

export default Album