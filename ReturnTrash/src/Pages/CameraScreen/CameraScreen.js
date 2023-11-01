import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen({ navigation }) {

  const [hasPermission, setHasPermission] = useState(null);

  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (hasPermission) {
      if (Camera.current) {
        const photo = await Camera.current.takePictureAsync();
        console.log(photo.uri);
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
      />
      <Button title="Tirar Foto" onPress={takePicture} />
      <Button title="Fechar" onPress={() => navigation.goBack()} />
    </View>
  );
}