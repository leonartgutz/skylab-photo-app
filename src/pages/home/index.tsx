import React from 'react'
import { View, Text } from 'react-native'
import { PageTitleView } from './homeStyles'

const Home: React.FC = () => (
  <PageTitleView>
    <Text>Professional retouching.</Text>
    <Text>Powered by A.I.</Text>
  </PageTitleView>
)

export default Home