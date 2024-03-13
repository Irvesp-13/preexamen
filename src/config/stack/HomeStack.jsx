import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../modules/home/adapters/screens/Home';

const Stack = createStackNavigator();

export default function FavoritesStack() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                Options={{ title: 'Home' }} />

        </Stack.Navigator>

    )
}
