import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

const DefaultScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
});

export default DefaultScreen;
