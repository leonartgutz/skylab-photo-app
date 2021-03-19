import React, { useRef, useState } from 'react'
import * as MediaLibrary from 'expo-media-library';
import { StyleSheet,  } from 'react-native'
import { Camera } from 'expo-camera'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import CustomStatusBar from '../../components/customStatusBar'
import { CameraBody } from './cameraStyle'
import { RoundBtn } from '../../styles/global'

interface Props {
  history: any
}

const CameraFrame: React.FC<Props> = ({ history }) => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef<Camera>(null)

  const handleSnap = async (): Promise<void> => {
    const { status } = await MediaLibrary.requestPermissionsAsync()

    if (status === 'granted') {

      const photo = await cameraRef.current!.takePictureAsync();
      await MediaLibrary.saveToLibraryAsync(photo.uri)
    }
  }

  return <>
  <CustomStatusBar alt={false} />
  <CameraBody>
    <Camera ref={cameraRef} style={camera.properties} type={type}>
      <RoundBtn posLeft onPress={() => history.push('/album')}>
        <FontAwesome name="close" size={40} color="white" />
      </RoundBtn>

      <RoundBtn posLeft={false} onPress={handleSnap}>
        <MaterialCommunityIcons name="camera-plus" size={40} color="white" />
      </RoundBtn>
    </Camera>
  </CameraBody>
  </>
  
}

// Styling for camera
const camera = StyleSheet.create({
  properties: {
    flex: 1
  }
})

export default CameraFrame