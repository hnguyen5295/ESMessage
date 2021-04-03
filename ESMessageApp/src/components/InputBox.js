import React, { useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Fa5Icon from 'react-native-vector-icons/FontAwesome5';


const InputBox = () => {
  const [message, setMessage] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Fa5Icon name="laugh-beam" size={24} color="grey"></Fa5Icon>
        <TextInput
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Fa5Icon name="paperclip" size={24} color="grey" style={styles.icon}></Fa5Icon>
        <Fa5Icon name="camera" size={24} color="grey" style={styles.icon}></Fa5Icon>
      </View>
      <View style={styles.buttonContainer}>
        <Fa5Icon name="microphone" size={24} color="grey"></Fa5Icon>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 25,
    marginRight: 10,
    flex: 1,
    alignItems: 'flex-end'
  },
  buttonContainer: {
    backgroundColor: 'green',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10
  },
  icon: {
    marginHorizontal: 5
  }
});

export default InputBox;
