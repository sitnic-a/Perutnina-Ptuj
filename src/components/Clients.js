import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native'
import { StatusList } from './StatusList'
import { Client } from './Client'
import { useState } from 'react'
import { data_clients } from '../data-dummy'
import { Ionicons } from '@expo/vector-icons'

export const Clients = ({ navigation }) => {
  let [clients, setClients] = useState(data_clients)

  let handleStatusChange = (status) => {
    if (status === 'Svi') {
      setClients(data_clients)
      return
    }
    setClients(data_clients.filter((client) => client.status === status))
  }

  return (
    <View style={styles.container}>
      {/* Search input field */}
      <StatusList
        style={styles.statusContainer}
        handleStatusChange={handleStatusChange}
      />
      <View style={styles.addClientBox}>
        <Ionicons
          onPress={() => navigation.navigate('New Client')}
          style={styles.addClientIcon}
          size={55}
          name="person-add-sharp"
          color="#fff"
        />
      </View>
      <ScrollView style={styles.clientsContainer}>
        {clients.map((client) => {
          return (
            <View style={styles.client} key={client.id}>
              <Client navigation={navigation} client={client} />
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  clientsContainer: {
    // backgroundColor: 'yellow',
    marginTop: 10,
  },
  client: {
    marginVertical: 8,
  },
  addClientBox: {
    margin: 'auto',
    zIndex: 1,
    width: 70,
    height: 70,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 60,
  },
  addClientIcon: {
    left: 5,
    top: 5,
  },
})
