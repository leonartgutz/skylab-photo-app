import React from 'react'
import { Text } from 'react-native'
import { Link } from 'react-router-native'
import { MainMenuWrap } from '../styles/MainMenu'

const MainMenu: React.FC = () => (
  <MainMenuWrap>
    <Link to="/">
      <Text>Home</Text>
    </Link>
    <Link to="/album">
      <Text>Album</Text>
    </Link>
  </MainMenuWrap>
)

export default MainMenu