import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import { useEffect, useState } from 'react'

export const ClientLocation = ({ navigation }) => {
  // console.log('Navigation ', navigation)
  let data = navigation.getParam('locationCoordinates')

  let coordinates = {
    longitude: data.lon,
    latitude: data.lat,
  }
  // console.log('Data n', data)
  console.log('Address coordinates ', coordinates)

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
