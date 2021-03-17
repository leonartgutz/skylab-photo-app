import React from 'react'
import { NativeRouter, Route, Switch } from "react-router-native"
import Album from './pages/album';
import Home from './pages/home'
import AppBody from './styles/AppBody';

const Routes: React.FC = () => (
  <NativeRouter>
    <AppBody>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/album" component={Album} />
      </Switch>
    </AppBody>
  </NativeRouter>
)

export default Routes