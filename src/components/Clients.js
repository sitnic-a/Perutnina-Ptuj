import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native'
import { StatusList } from './StatusList'
import { Client } from './Client'
import { useState } from 'react'
import { data_clients } from '../data-dummy'

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
  clientList: {
    marginTop: 10,
  },
})
