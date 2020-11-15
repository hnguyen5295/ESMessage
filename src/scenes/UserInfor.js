import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Fa5Icon from 'react-native-vector-icons/FontAwesome5';


const UserInfor = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarWrap}>
        <Image style={styles.avatar} source={{
          uri: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-cute-pug-dog-shoot-heart-png-image_5235122.jpg',
        }}/>
      </View>
      <View>
        <Text style={styles.name}>Mr.Pug</Text>
      </View>
      <View style={styles.userBio}>
        <Text style={styles.userBio_description}>The pug is a breed of dog with physically distinctive features of a wrinkly, short-muzzled face, and curled tail...</Text>
      </View>
      <View style={styles.deco}>
        <Fa5Icon name="bone" size={40} color="#e65100" />
        <Fa5Icon name="bone" size={40} color="#616161" />
        <Fa5Icon name="bone" size={40} color="#e65100" />
        <Fa5Icon name="bone" size={40} color="#616161" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  avatarWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  name: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    color: '#e65100'
  },
  userBio: {
    padding: 15
  },
  userBio_description: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'left',
    color: '#616161'
  },
  deco: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default UserInfor;
