import React from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Platform, StyleSheet } from 'react-native'
import { InfoMessage, PageTitleText, HomeBody, PhotoExampleImage, PhotoExampleWrap, SelectPhotoBtn, SelectPhotoBtnText, AgreementText } from './homeStyles'
import CustomStatusBar from '../../components/customStatusBar'
const PhotoExample = require('../../../assets/photo-example.png')

interface Props {
  history: any
}

const Home: React.FC<Props> = ({ history }) => {

  // Show Album
  const showAlbum = async (): Promise<void> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      history.push('/album')
    }
  }

  // Check for permission
  const checkPermission = async (): Promise<void> => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');

      } else {
        showAlbum();

      }
    }
  };

  return <>
  <CustomStatusBar alt={false} />
  <HomeBody>
    <PageTitleText>Professional retouching.</PageTitleText>
    <PageTitleText>Powered by A.I.</PageTitleText>
    
    <PhotoExampleWrap style={boxShadow.properties}>
      <PhotoExampleImage source={PhotoExample} />
    </PhotoExampleWrap>

    <InfoMessage>Select a photo to start</InfoMessage>

    <SelectPhotoBtn onPress={checkPermission} style={boxShadow.properties}>
      <SelectPhotoBtnText>Select Photo</SelectPhotoBtnText>
    </SelectPhotoBtn>

    <AgreementText>by selecting a photo you agree to our Terms of Service and Privacy Policy</AgreementText>
  </HomeBody>
  </>
}

// Styling for box-shadow
const boxShadow = StyleSheet.create({
  properties: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 5
  }
})

export default Home