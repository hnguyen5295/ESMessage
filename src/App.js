import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import {
  StyleSheet
} from 'react-native';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import DefaultScreen from './screens/DefaultScreen';
import SettingScreen from './screens/Setting';
import HeaderScreen from './navigation/HeaderScreen';
import HeaderLeft from './navigation/HeaderLeft';
import HeaderRight from './navigation/HeaderRight';




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
      <Stack.Navigator initialRouteName="DefaultScreen">
        <Stack.Screen name="Home" component={Home}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (<HeaderLeft headerText={'BACK'} />),
            headerTitle: <HeaderScreen headerText={'EDSO'} />,
            headerRight: () => (<HeaderRight headerText={'BACK'} />),
          }}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="DefaultScreen" component={DefaultScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ headerTitle: null }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
});

export default App;
