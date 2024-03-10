import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import { useEffect, useState } from 'react'

export const ClientLocation = ({ navigation }) => {
  //   console.log('Coordinates of the street ', coordinates)
  let address = navigation.getParam('location')
  let coordinates = navigation.getParam('locationCoordinates')

  //   console.log('Location address is ', address)

  let initialRegion = {
    latitude: 43.85643,
    longitude: 18.413029,
    latitudeDelta: 0.002,
    longitudeDelta: 0.048,
  }

  let initialMarker = {
    latitude: 43.85643,
    longitude: 18.413029,
  }

  return (
    <View style={styles.container}>
      <MapView initialRegion={initialRegion} style={styles.map}>
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
