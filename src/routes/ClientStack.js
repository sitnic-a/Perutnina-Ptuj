import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { ClientsScreen } from '../screens/clients-screen'
import { ClientScreen } from '../screens/client-screen'
import { ClientLocation } from '../components/ClientLocation'

const screens = {
  Clients: {
    screen: ClientsScreen,
  },
  Location: {
    screen: ClientLocation,
  },
  Client: {
    screen: ClientScreen,
  },
}

const ClientStack = createStackNavigator(screens)

export default createAppContainer(ClientStack)
