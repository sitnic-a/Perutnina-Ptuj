import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Header } from '../components/Header'
import { Clients } from '../components/Clients'

export const ClientsScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <Header></Header>
      <Clients navigation={navigation}></Clients>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    borderWidth: 0,
  },
})
