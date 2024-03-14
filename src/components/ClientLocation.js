import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export const ClientLocation = ({ navigation }) => {
  // console.log('Navigation ', navigation)
  let data = navigation.getParam('locationCoordinates')

  let coordinates = {
    longitude: data.lon,
    latitude: data.lat,
  }

  let initialRegion = {
    latitude: data.bbox.lat1,
    longitude: data.bbox.lon1,
    latitudeDelta: 0.02,
    longitudeDelta: 0.01,
  }
  console.log('Region ', initialRegion)
  console.log('Address coordinates ', coordinates)

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={initialRegion}
        style={styles.map}
        // onMapReady={() => setClientRegion(coordinatesRegion)}
      >
        {coordinates && <Marker coordinate={coordinates}></Marker>}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})
