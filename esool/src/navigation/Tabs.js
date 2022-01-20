import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from '../screens/tab.screens/tab1';
import { Tab2 } from '../screens/tab.screens/tab2';
import { Tab3 } from '../screens/tab.screens/tab3';
import { Tab4 } from '../screens/tab.screens/tab4';

import { StackNavigation } from './Stack';
import { First } from '../screens/first';

const Tab = createBottomTabNavigator();

const navigation = [
    { name: 'HOME', component: First },
    { name: 'Tab1', component: Tab1 },
    { name: 'Tab2', component: Tab2 },
    { name: 'Tab3', component: Tab3 },
    { name: 'Tab4', component: Tab4 }
];

export function BottomTabNavigation() {
    return (
        <Tab.Navigator>
            {navigation.map((nav) => (
                <Tab.Screen name={nav.name} component={nav.component} />
            ))}
        </Tab.Navigator>
    );
}
