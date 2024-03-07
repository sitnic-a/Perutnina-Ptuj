import { StyleSheet, View, Text } from 'react-native'

export const ClientScreen = ({ navigation }) => {
  {
    /*name: 'Admir_5',
    note: '',
    location: 'Gradacacka 104',
    phoneNumber: '666-777-888',
    role: 'React Developer',
    status: 'Treba se javiti', */
  }

  return (
    <View>
      <Text>Klijent: {navigation.getParam('name')}</Text>
      <Text>Klijent: {navigation.getParam('note')}</Text>
      <Text>Klijent: {navigation.getParam('location')}</Text>
      <Text>Klijent: {navigation.getParam('phoneNumber')}</Text>
      <Text>Klijent: {navigation.getParam('role')}</Text>
      <Text>Klijent: {navigation.getParam('status')}</Text>
    </View>
  )
}
