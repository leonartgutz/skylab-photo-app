import React from 'react'
import { StatusBar } from 'react-native'
import { NativeRouter, Route, Switch } from "react-router-native"
import MainMenu from './components/MainMenu'
import Album from './pages/album';
import Home from './pages/home'
import AppBody from './styles/AppBody';

const Routes: React.FC = () => (
  <NativeRouter>
    <AppBody>
      <StatusBar backgroundColor="#d20" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/album" component={Album} />
      </Switch>
      <MainMenu />
    </AppBody>
  </NativeRouter>
)

export default Routes