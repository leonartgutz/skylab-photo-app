import React from 'react'
import { StyleSheet } from 'react-native'
import { InfoMessage, PageTitleText, HomeBody, PhotoExampleImage, PhotoExampleWrap, SelectPhotoBtn, SelectPhotoBtnText, AgreementText } from './homeStyles'
const PhotoExample = require('../../../assets/photo-example.png')

const Home: React.FC = () => (
  <HomeBody>
    <PageTitleText>Professional retouching.</PageTitleText>
    <PageTitleText>Powered by A.I.</PageTitleText>
    
    <PhotoExampleWrap style={boxShadow.properties}>
      <PhotoExampleImage source={PhotoExample} />
    </PhotoExampleWrap>

    <InfoMessage>Select a photo to start</InfoMessage>

    <SelectPhotoBtn onPress={() => {}} style={boxShadow.properties}>
      <SelectPhotoBtnText>Select Photo</SelectPhotoBtnText>
    </SelectPhotoBtn>

    <AgreementText>by selecting a photo you agree to our Terms of Service and Privacy Policy</AgreementText>
  </HomeBody>
)

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