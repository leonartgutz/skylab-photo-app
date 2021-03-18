import { View } from 'native-base';
import React from 'react'
import { NativeRouter, Route, Switch } from "react-router-native"
import Album from './pages/album';
import Home from './pages/home'

const Routes: React.FC = () => (
  <NativeRouter>
    <View>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/album" component={Album} />
      </Switch>
    </View>
  </NativeRouter>
)

export default Routes