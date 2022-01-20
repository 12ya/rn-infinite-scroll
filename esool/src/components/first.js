import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

export function Button() {
    return (
        <View
            style={{
                paddingHorizontal: 20,
                alignSelf: 'center',
                paddingTop: 200,
            }}
        >
            <TouchableOpacity>
                <Text>press me</Text>
            </TouchableOpacity>
        </View>
    );
}
