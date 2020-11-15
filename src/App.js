import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import {
  StyleSheet
} from 'react-native';
import Home from './scenes/Home';
import SignIn from './scenes/SignIn';
import SignUp from './scenes/SignUp';


const Stack = createStackNavigator();

const App = () => {

  function sendNotification(data, id) {
    let headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Basic 'NGQxZTQ3MDAtYjQ5Mi00OTIyLWI3OTItYTVhZjdjYWM5OWFk'",
    };
    let endpoint = "https://onesignal.com/api/v1/notifications";
    let params = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        app_id: "1a3867ac-6a43-4d16-95de-155937ae756f",
        filters: [{ field: "tag", key: "Id", relation: "=", value: id }],
        headings: { en: "Your Heading" },
        contents: { en: data },
        url: "https://something.any",
      }),
    };
    fetch(endpoint, params).then((res) => console.log(res));
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
