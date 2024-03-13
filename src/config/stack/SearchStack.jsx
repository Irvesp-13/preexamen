import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../../modules/search/adapters/screens/Search';

const Stack = createStackNavigator();

export default function FavoritesStack() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={Search}
                Options={{ title: 'Favoritos' }} />

        </Stack.Navigator>

    )
}
