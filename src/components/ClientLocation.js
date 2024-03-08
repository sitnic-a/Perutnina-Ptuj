import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'

export const ClientLocation = () => {
  let initialRegion = {
    latitude: 43.85643,
    longitude: 18.413029,
    latitudeDelta: 0.002,
    longitudeDelta: 0.048,
  }

  return (
    <View style={styles.container}>
      <MapView initialRegion={initialRegion} style={styles.map} />
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
