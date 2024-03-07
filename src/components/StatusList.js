import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native'

export const StatusList = ({ handleStatusChange }) => {
  let status = ['Svi', 'Aktivan', 'Završen', 'Treba se javiti']

  return (
    <View style={styles.statusList}>
      <FlatList
        data={status}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.statusBtn, styles.active]}
            onPress={() => handleStatusChange(item)}
          >
            <Text style={styles.statusBtnText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  statusList: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  statusBtn: {
    fontSize: 20,
    paddingHorizontal: 15,
    paddingVertical: 2,
    marginRight: 20,
    height: '100%',
    backgroundColor: '#fff',
    borderColor: '#005037',
    borderWidth: 1,
    borderRadius: 6,
  },
  active: {
    backgroundColor: '#005037',
  },
  statusBtnText: {
    color: '#fffacd',
    fontSize: 16,
  },
})
