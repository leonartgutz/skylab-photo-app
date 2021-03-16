import React from 'react'
import { Text } from 'react-native'
import { Link } from 'react-router-native'
import MainMenuStyle from '../styles/MainMenuStyle'

const MainMenu: React.FC = () => (
  <MainMenuStyle>
    <Link to="/">
      <Text>Home</Text>
    </Link>
    <Link to="/album">
      <Text>Album</Text>
    </Link>
  </MainMenuStyle>
)

export default MainMenu