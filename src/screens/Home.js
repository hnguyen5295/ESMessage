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
import { Header } from 'react-native-elements';
// import Header from '../navigation/Header';
import SignIn from './SignIn';
import DefaultScreen from './DefaultScreen';
import SettingScreen from './Setting';

const Tab = createBottomTabNavigator();
const HomeScreen = () => {

  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <Tab.Navigator
        initialRouteName="ListMail"
        tabBarOptions={{
          activeTintColor: '#000',

        }}

      // tabBarOnPress= {(tab) => {

      //   console.log('A' + tab);
      // // navigation.state.params.navigatePress()
      // // tab.jumpToIndex(tab.scene.index)
      // }}
      // onPress={(route) => {
      //   alert(route);
      //   navigation.dispatch(jumpToAction);
      // }
      // }
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;

      //     if (route.name === 'Home') {
      //       iconName = focused
      //         ? 'ios-information-circle'
      //         : 'ios-information-circle-outline';
      //     } else if (route.name === 'Settings') {
      //       iconName = focused ? 'ios-list-box' : 'ios-list';
      //     }

      //     // You can return any component that you like here!
      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      // })}
      // tabBarOptions={{
      //   activeTintColor: 'tomato',
      //   inactiveTintColor: 'gray',
      // }}
      >
        <Tab.Screen
          name="ListMail"
          component={ListMail}
          options={{
            tabBarLabel: 'Mail',
            tabBarIcon: () => (
              <Fa5Icon name="mail-bulk" size={20} color="#e65100" />
            )
          }}
        />
        <Tab.Screen
          name="CreateMail"
          component={CreateMail}
          options={{
            tabBarLabel: 'Compose',
            tabBarIcon: () => (
              <Fa5Icon name="edit" size={20} color="#e65100" />
            )
          }}
        />
        <Tab.Screen
          name="UserInfor"
          component={UserInfor}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
              <Fa5Icon name="user" size={20} color="#e65100" />
            )
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerTitle: '',
            tabBarLabel: 'Setting',

            tabBarIcon: () => (
              <Fa5Icon name="cog" size={20} color="#e65100" />
            )
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default HomeScreen;
