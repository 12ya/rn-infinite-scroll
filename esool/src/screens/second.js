import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

export function Second({ navigation }) {
    return (
        <View
            style={{
                paddingHorizontal: 20,
                alignSelf: 'center',
                paddingTop: 200
            }}
        >
            <Text>SECOND SCREEN</Text>
            <Text
                style={{ color: 'violet', fontSize: 20, fontWeight: '800' }}
                onPress={() => navigation.navigate('third')}
            >
                Go to third one
            </Text>
        </View>
    );
}
