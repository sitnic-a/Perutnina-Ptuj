import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import RNPickerSelect from 'react-native-picker-select'

export const AddNewClient = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyHeader}>
        <Text style={styles.bodyHeaderText}>Fill the form below</Text>
      </View>
      <View style={styles.form}>
        <ScrollView style={styles.formContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Client name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter name of the client..."
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Note:</Text>
            <TextInput
              multiline={true}
              numberOfLines={8}
              style={styles.input}
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Location:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the clients location... "
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Phone number: </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter clients phone number..."
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Role:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the clients role..."
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Client status:</Text>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: 'Aktivan', value: 'Aktivan' },
                { label: 'Završen', value: 'Završen' },
                { label: 'Treba se javiti', value: 'Treba se javiti' },
              ]}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('New client saved')}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyHeader: {
    height: 60,
    backgroundColor: 'yellow',
  },
  bodyHeaderText: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 10,
    textAlign: 'center',
  },
  form: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  formContainer: {
    marginHorizontal: 30,
  },
  inputBox: {
    width: '100%',
    marginTop: 7,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  label: {
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
  },
  input: {
    marginTop: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 5,
  },
  button: {
    borderColor: '#ddd',
    borderWidth: 1,
    marginHorizontal: 60,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
  },
})
