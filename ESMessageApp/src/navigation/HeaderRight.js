import React from 'react';
import { Text, View } from 'react-native';
import { Dimensions } from "react-native";

const HeaderRight = (props) => {
    const { headerStyle, bgHeader } = styles;
    var width = Dimensions.get('window').width; //full width
    return (
        <View style={bgHeader}>
            <Text style={headerStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    bgHeader: {
        backgroundColor: '#fff',
        // flexDirection: "row",
        alignSelf: 'stretch',
        flex: 1
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    headerStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
        alignSelf: 'stretch',

    },
};

//export component để dùng ở 1 nơi khác
module.exports = HeaderRight;
