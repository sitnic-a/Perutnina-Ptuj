import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { useState, useEffect } from 'react'

export const Client = ({ navigation, client }) => {
  let [coordinates, setCoordinates] = useState(null)

  return (
    <TouchableOpacity
      onPress={() => {
        let locationCoordinates
        // let testingAddress = 'Behdžeta Mutevelića 55'
        let url = `https://api.geoapify.com/v1/geocode/search?name=${client.location}&format=json&apiKey=3539a5cda8d544b49794a57827db59ec`
        fetch(url)
          .then((response) => response.json())
          .then((result) => {
            // setCoordinates(result.results[0])
            // console.log('Coordinates ', coordinates)
            locationCoordinates = result.results[0]
            console.log('Data from API', locationCoordinates)
            navigation.navigate('Client', {
              client: client,
              locationCoordinates,
            })
          })
      }}
      style={styles.container}
    >
      <View style={styles.infoBox}>
        <View style={styles.clientHeader}>
          <FontAwesome
            name="map-marker"
            size={30}
            color="black"
            style={styles.mapIcon}
            onPress={() => {
              let locationCoordinates
              // let testingAddress = 'Behdžeta Mutevelića 55'
              let url = `https://api.geoapify.com/v1/geocode/search?name=${client.location}&format=json&apiKey=3539a5cda8d544b49794a57827db59ec`
              fetch(url)
                .then((response) => response.json())
                .then((result) => {
                  // setCoordinates(result.results[0])
                  // console.log('Coordinates ', coordinates)
                  locationCoordinates = result.results[0]
                  console.log('Data from API', locationCoordinates)
                  navigation.navigate('Location', {
                    client,
                    locationCoordinates,
                  })
                })
            }}
          />
          <Text style={[styles.label, styles.name]}>Klijent:</Text>
          <AntDesign
            name="edit"
            size={26}
            color="black"
            onPress={() => alert('Change clients state')}
            style={styles.updateIcon}
          />
        </View>
        <Text style={styles.value}>{client.name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Napomena:</Text>
        <Text style={styles.value}>{client.note}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Broj:</Text>
        <Text style={styles.value}>{client.phoneNumber}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Lokacija:</Text>
        <Text style={styles.value}>{client.location}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Status:</Text>
        {client.status === 'Aktivan' ? (
          <Text style={[styles.value, styles.active]}>{client.status}</Text>
        ) : client.status === 'Završen' ? (
          <Text style={[styles.value, styles.inactive]}>{client.status}</Text>
        ) : (
          <Text style={[styles.value, styles.pending]}>{client.status}</Text>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'column',
    width: '70%',
    borderColor: '#969696',
    borderWidth: 0.2,
    marginBottom: 10,
    borderRadius: 7,
  },
  infoBox: {
    width: '100%',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  clientHeader: {
    padding: 2,
    width: '100%',
    backgroundColor: '#eee',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  mapIcon: {
    position: 'absolute',
    left: 5,
    top: 0,
  },
  updateIcon: {
    position: 'absolute',
    right: 5,
    top: 2,
  },
  label: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  name: {
    padding: 2,
  },
  value: {
    padding: 5,
    textAlign: 'center',
    fontSize: 15,
  },
  active: {
    backgroundColor: 'green',
    color: '#fff',
  },
  inactive: {
    backgroundColor: 'red',
    color: '#fff',
  },
  pending: {
    backgroundColor: 'yellow',
  },
})
