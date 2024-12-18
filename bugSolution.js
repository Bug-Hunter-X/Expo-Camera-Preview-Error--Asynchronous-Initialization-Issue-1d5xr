// bugSolution.js
import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';

async function App() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);
  const [cameraReady, setCameraReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraReady = () => {
    setCameraReady(true);
  };

  if (hasPermission === null) {
    return <View />; // Return a loading indicator or similar
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      {cameraReady && (
        <Camera style={{ flex: 1 }} type={type} onCameraReady={handleCameraReady}>
          {/* Your camera preview elements here */}
        </Camera>
      )}
    </View>
  );
}

export default App;