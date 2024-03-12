import { StyleSheet, View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Marker } from 'react-native-maps'
import MapView from 'react-native-maps'

export const ClientScreen = ({ navigation }) => {
  let data = navigation.getParam('locationCoordinates')
  let client = navigation.getParam('client')
  console.log('Client on screen ', client)

  let coordinates = {
    longitude: data.lon,
    latitude: data.lat,
  }

  let initialRegion = {
    latitude: 43.85643,
    longitude: 18.413029,
    latitudeDelta: 0.02,
    longitudeDelta: 0.038,
  }
  // console.log('Data n', data)
  console.log('Address coordinates on client screen', coordinates)

  return (
    <View style={styles.container}>
      <Text style={styles.info}>{client.name}</Text>
      <View style={styles.about}>
        <View style={styles.infoBox}>
          <Text style={styles.info}>Klijent: {client.name}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.info}>Note: {client.note}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.info}>Address: {client.location}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.info}>Phone number: {client.phoneNumber}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.info}>Role: {client.role}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.info}>Status: {client.status}</Text>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <MapView initialRegion={initialRegion} style={styles.map}>
          {coordinates && <Marker coordinate={coordinates}></Marker>}
        </MapView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'yellow',
  },
  about: {
    padding: 10,
    margin: 20,
    // backgroundColor: 'red',
    borderColor: '#eee',
    borderWidth: 1,
  },
  infoBox: {
    marginHorizontal: 10,
    marginTop: 5,
    padding: 7,
    backgroundColor: '#eee',
  },
  info: {
    textAlign: 'center',
  },
  mapContainer: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  map: {
    marginBottom: 50,
    marginTop: -20,
    width: '100%',
    height: '68%',
  },
})
