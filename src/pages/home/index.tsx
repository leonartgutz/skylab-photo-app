import React from 'react'
import { StyleSheet } from 'react-native'
import { InfoMessage, PageTitleText, PageTitleView, PhotoExampleImage, PhotoExampleWrap } from './homeStyles'
const PhotoExample = require('../../../assets/photo-example.png')

const Home: React.FC = () => (
  <PageTitleView>
    <PageTitleText>Professional retouching.</PageTitleText>
    <PageTitleText>Powered by A.I.</PageTitleText>
    
    <PhotoExampleWrap style={boxShadow.properties}>
      <PhotoExampleImage source={PhotoExample} />
    </PhotoExampleWrap>

    <InfoMessage>Select a photo to start</InfoMessage>
  </PageTitleView>
)

// Styling for box-shadow
const boxShadow = StyleSheet.create({
  properties: {
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 5
  }
})

export default Home