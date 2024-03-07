import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { ClientsScreen } from '../screens/clients-screen'
import { ClientScreen } from '../screens/client-screen'

const screens = {
  Clients: {
    screen: ClientsScreen,
  },
  Client: {
    screen: ClientScreen,
  },
}

const ClientStack = createStackNavigator(screens)

export default createAppContainer(ClientStack)
