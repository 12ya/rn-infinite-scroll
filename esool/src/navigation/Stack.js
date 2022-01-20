import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Second } from '../screens/second';
import { Third } from '../screens/third';
import { Fourth } from '../screens/fourth';

import { BottomTabNavigation } from './Tabs';

const navigation = [
    { name: 'first', component: BottomTabNavigation },
    { name: 'second', component: Second },
    { name: 'third', component: Third },
    { name: 'fourth', component: Fourth },
];

const Stack = createNativeStackNavigator();

export function StackNavigation() {
    return (
        <Stack.Navigator>
            {navigation.map((nav) => (
                <Stack.Screen name={nav.name} component={nav.component} />
            ))}
        </Stack.Navigator>
    );
}
