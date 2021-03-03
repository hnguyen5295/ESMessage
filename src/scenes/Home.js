import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListMail from './ListMail';
import CreateMail from './CreateMail';
import UserInfor from './UserInfor';
import Fa5Icon from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();
const Home = () => {

  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>

      <Tab.Navigator
        initialRouteName="ListMail"
        tabBarOptions={{
          activeTintColor: '#000',
        }}
      >
        <Tab.Screen
          name="ListMail"
          component={ListMail}
          options={{
            tabBarLabel: 'List mail',
            tabBarIcon: () => (
              <Fa5Icon name="mail-bulk" size={25} color="#e65100" />
            )
          }}
        />
        <Tab.Screen
          name="CreateMail"
          component={CreateMail}
          options={{
            tabBarLabel: 'Compose mail',
            tabBarIcon: () => (
              <Fa5Icon name="edit" size={25} color="#e65100" />
            )
          }}
        />
        <Tab.Screen
          name="UserInfor"
          component={UserInfor}
          options={{
            tabBarLabel: 'User infor',
            tabBarIcon: () => (
              <Fa5Icon name="user" size={25} color="#e65100" />
            )
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default Home;
