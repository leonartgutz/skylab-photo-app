import React from 'react'
import { StatusBarWrap } from './customStatusBarStyle'
import { StatusBar } from 'expo-status-bar'

interface Props {
  alt: boolean
}

const CustomStatusBar: React.FC<Props> = ({alt}) => (
  <StatusBarWrap alt={alt}>
    <StatusBar style={alt ? 'light' : 'dark'}/>
  </StatusBarWrap>
)

export default CustomStatusBar