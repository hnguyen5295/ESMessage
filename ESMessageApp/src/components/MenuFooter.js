import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListMail } from '../screens/ListMail';
import { CreateMail } from '../screens/CreateMail';
import { UserInfor } from '../screens/UserInfor';


const Tab = createBottomTabNavigator();
const MenuFooter = () => {


  return (
    <Tab.Navigator
      initialRouteName="ListMail"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="ListMail"
        component={ListMail}
        options={{
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name="CreateMail"
        component={CreateMail}
        options={{
          tabBarLabel: 'Updates'
        }}
      />
      <Tab.Screen
        name="UserInfor"
        component={UserInfor}
        options={{
          tabBarLabel: 'Profile'
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
});

export default MenuFooter;
