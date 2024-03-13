import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../../modules/auth/account/adapters/screens/Profile';
import ImagenDestacada from '../../modules/auth/account/destacada/adapters/screens/ImagenDescatacada';

const Stack = createStackNavigator();

export default function FavoritesStack() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile}
                Options={{ title: 'Profile' }} />

            <Stack.Screen
                name="ImagenDestacada"
                component={ImagenDestacada}
                Options={{ title: 'ImagenDestacada' }} />

        </Stack.Navigator>

    )
}
