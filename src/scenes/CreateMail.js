import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InputBox from '../components/InputBox';


const CreateMail = () => {
  const [value, onChangeText] = React.useState('To: 09xxxxxxxx');


  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '60%' }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <TouchableOpacity style={styles.button}>
          <Text>Select</Text>
        </TouchableOpacity>
      </View>

      <InputBox></InputBox>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    height: 40,
    width: '30%'
  }
});

export default CreateMail;
