import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { WebView } from 'react-native-webview';


const listMail = require('../webviews/ListMailWV.html')
const ListMail = () => {


  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={['*']}
        source={ listMail }
      />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default ListMail;
