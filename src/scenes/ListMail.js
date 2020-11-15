import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';


const listMail = require('../webviews/ListMailWV.html')
const ListMail = () => {


  return (
    <WebView source={listMail} />
  );
};

const styles = StyleSheet.create({
});

export default ListMail;
