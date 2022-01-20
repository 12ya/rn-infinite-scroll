import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

export function Third({ navigation }) {
    return (
        <View
            style={{
                paddingHorizontal: 20,
                alignSelf: 'center',
                paddingTop: 200
            }}
        >
            <Text>THIRD SCREEN</Text>
            <Text
                onPress={() => navigation.navigate('fourth')}
                style={{
                    marginTop: 200,
                    color: 'violet',
                    fontSize: 20,
                    fontWeight: '800'
                }}
            >
                and the last one
            </Text>
        </View>
    );
}
