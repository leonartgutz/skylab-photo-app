import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import CustomStatusBar from '../../components/customStatusBar'
import { AlbumBody, AlbumBtn, AlbumPhotoCardImage, AlbumPhotoCardWrap, AlbumPhotos, AlbumTitle, AlbumWrap, MenuArea } from './albumStyle'
import { primary } from '../../styles/Colors'
import CustomCheckBox from '../../components/customCheckBox'

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

const Album: React.FC = () => {

  return <>
  <CustomStatusBar alt />
  <AlbumBody>
    <MenuArea>
      <Ionicons name="ios-menu" size={32} color={primary} />
    </MenuArea>

    {imageList.map((album: any) => (
      <AlbumWrap>
        <AlbumTitle>{album.titleName}</AlbumTitle>

        <AlbumBtn>
          <MaterialIcons name="navigate-next" size={32} color={primary} />
        </AlbumBtn>

        <AlbumPhotos>
          {album.images.map((image: any) => (
            <AlbumPhotoCardWrap onPress={() => {}}>
              <AlbumPhotoCardImage source={image}>
                <CustomCheckBox isCheck />
              </AlbumPhotoCardImage>
            </AlbumPhotoCardWrap>
          ))}
        </AlbumPhotos>

      </AlbumWrap>
    ))}
    
  </AlbumBody>
  </>
}

export default Album