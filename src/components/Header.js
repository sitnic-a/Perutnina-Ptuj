import { StyleSheet, Text, View, Image } from 'react-native'

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../assets/images/perutnina-logo-png.png')}
        style={styles.headerLogo}
      ></Image>
      <Text style={styles.headerText}>Perutnina Ptuj</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    // marginTop: 30,
    // backgroundColor: 'red',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomColor: '#ddd',
    borderTopColor: '#fff',
    borderWidth: 1,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 20,
  },
  headerLogo: {
    width: 80,
    height: 80,
  },
})
