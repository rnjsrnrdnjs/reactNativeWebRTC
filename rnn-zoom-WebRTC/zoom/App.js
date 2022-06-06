import React from 'react';
import {useEffect} from 'react';
import {View, Dimensions, ScrollView, Text} from 'react-native';
import {RTCView, mediaDevices} from 'react-native-webrtc';

const {width, height} = Dimensions.get('window');

export default function App() {
  useEffect(() => {
    let isFront = true;
    mediaDevices.enumerateDevices().then((sourceInfos) => {
      let videoSourceId;
      for (let i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if (
          sourceInfo.kind == 'videoinput' &&
          sourceInfo.facing == (isFront ? 'front' : 'environment')
        ) {
          videoSourceId = sourceInfo.deviceId;
        }
      }
      mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            mandatory: {
              minWidth: 500,
              minHeight: 300,
              minFrameRate: 30,
            },
            facingMode: isFront ? 'user' : 'environment',
            optional: videoSourceId ? [{sourceId: videoSourceId}] : [],
          },
        })
        .then((stream) => {
          console.lot(stream);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{}}>App</Text>
    </View>
  );
}
