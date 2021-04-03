import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';


const SignUp = ({ navigation }) => {


  return (
    <View style={styles.container}>
    <Text style={styles.signInTitle}>Sign up</Text>
      <TextInput
        placeholder="Your name"
        placeholderTextColor="#bdbdbd"
        style={styles.input}
      />
      <TextInput
        placeholder="Mobile phone"
        placeholderTextColor="#bdbdbd"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#bdbdbd"
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Complete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  signInTitle: {
    width: '80%',
    textAlign:'left',
    fontWeight:'bold',
    fontSize: 20,
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 10
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#e65100",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '80%',
    marginTop: 20
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center"
  },
});

export default SignUp;
