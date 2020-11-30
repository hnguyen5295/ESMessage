import React, {useEffect}  from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Fa5Icon from 'react-native-vector-icons/FontAwesome5';


const SignIn = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState('0911911911');
  const [pwd, onChangePwd] = React.useState('admin');
  const IGoogle = <Fa5Icon name="google" size={20} color="#900" />;
  const IFacebook = <Fa5Icon name="facebook" size={20} color="#1565c0" />;

  useEffect(() => {
  }, []);

  const fetchUsers = () => {
    // Where we're fetching data from
    fetch(`https://jsonplaceholder.typicode.com/users`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data => {
        // console.log(data[0].name);
        Alert.alert(
          data[0].name
        );
        // this.setState({
        //   users: data,
        //   isLoading: false,
        // })
      })
      // Catch any errors we hit and update the app
      .catch(error => console.log('ERROR:'+error));
  }

  const login = () => {
    requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "phone": username,
        "password":pwd
      })};

    fetch(`https://api.edsogroup.vn/api/login`,requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        var msg = '';
        if (data.token) {
          msg = 'LOGIN SUCCESFULL';
        } else {
         if(data.username){
           msg=data.username[0];
         }
        }
        Alert.alert(
          msg
        ); 
      })
      .catch(error => console.log('ERROR:'+error));
  }

  showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  return (
    <View style={styles.container}>
    <Text style={styles.signInTitle}>Sign in</Text>
      <TextInput
        value={username}
        placeholder="Mobile phone"
        placeholderTextColor="#bdbdbd"
        style={styles.input}
        onChangeText={text => onChangeUsername(text)}
      />
      <TextInput
        value={pwd}
        placeholder="Password"
        placeholderTextColor="#bdbdbd"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={text => onChangePwd(text)}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.pwdWrap}>
        <Text style={styles.pwdWrap_label}>Forgot password?</Text>
      </View>
      <View style={styles.socialBtn}>
        <TouchableOpacity style={styles.socialBtn_wrapper}>
          <Text style={styles.socialBtn_googText}>{IGoogle} Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn_wrapper}>
          <Text style={styles.socialBtn_fbText}>{IFacebook} Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.textWrap_greyLabel}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.textWrap_orangeLabel}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 18,
    marginBottom: 20
  },
  pwdWrap: {
    marginTop: 60
  },
  pwdWrap_label: {
    fontSize: 14,
    color: '#e65100',
    fontWeight: '500'
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
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center"
  },
  socialBtn_wrapper: {
    elevation: 8,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '45%',
    marginTop: 20,
    borderColor: '#bdbdbd',
    borderWidth: 1
  },
  socialBtn_googText: {
    fontSize: 14,
    color: "#e65100",
    fontWeight: "bold",
    alignSelf: "center"
  },
  socialBtn_fbText: {
    fontSize: 14,
    color: "#1565c0",
    fontWeight: "bold",
    alignSelf: "center"
  },
  socialBtn: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40
  },
  textWrap: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'row'
  },
  textWrap_greyLabel: {
    fontSize: 14,
    color: "#bdbdbd",
    fontWeight: "600",
  },
  textWrap_orangeLabel: {
    fontSize: 14,
    color: "#e65100",
    fontWeight: "600",
  }
});

export default SignIn;
