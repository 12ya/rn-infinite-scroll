import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';

export function First({ navigation }) {
    return (
        <View
            style={{
                paddingHorizontal: 20,
                alignSelf: 'center',
                paddingTop: 200,
            }}
        >
            <Text style={{ paddingBottom: 50, color: 'purple' }}>Example</Text>
            <Text>build applications with react native,</Text>
            <Text
                onPress={() => navigation.navigate('second')}
                style={{
                    paddingTop: 40,
                    color: 'violet',
                    fontSize: 20,
                    fontWeight: '800',
                }}
            >
                press me to go to second screen
            </Text>
            <View></View>
        </View>
    );
}
