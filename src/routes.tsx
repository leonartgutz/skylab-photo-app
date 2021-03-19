import { View } from 'native-base';
import React from 'react'
import { NativeRouter, Route, Switch } from "react-router-native"
import Album from './pages/album';
import CameraFrame from './pages/camera';
import Home from './pages/home'

const Routes: React.FC = () => (
  <NativeRouter>
    <View>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/album" component={Album} />
        <Route path="/camera" component={CameraFrame} />
      </Switch>
    </View>
  </NativeRouter>
)

export default Routes