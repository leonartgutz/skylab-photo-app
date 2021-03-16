import React from 'react'
import { View } from 'react-native'
import { NativeRouter, Route, Switch } from "react-router-native"
import MainMenu from './components/MainMenu'
import Album from './pages/album';
import Home from './pages/home'

const Routes: React.FC = () => (
  <NativeRouter>
    <View>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/album" component={Album} />
      </Switch>
      <MainMenu />
    </View>
  </NativeRouter>
)

export default Routes