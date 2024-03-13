import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import ProfileStack from '../stack/ProfileStack'
import HomeStack from '../stack/HomeStack'
import SearchStack from '../stack/SearchStack'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (

        <NavigationContainer  >

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        const { iconName, iconType } = getIconName(route.name, focused);
                        // Retornar un Icon de React Native Elements
                        return <Icon name={iconName} type={iconType} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}
            >
                <Tab.Screen
                    name='HomeStack'
                    component={HomeStack}
                    options={{ title: "Home" }} />

                <Tab.Screen
                    name='ProfileStack'
                    component={ProfileStack}
                    options={{ title: "Profile" }} />

                <Tab.Screen
                    name='SearchStack'
                    component={SearchStack}
                    options={{ title: "Search" }} />


            </Tab.Navigator>

        </NavigationContainer>

    )
};

const getIconName = (routeName, focused) => {
    let iconName = '';
    let iconType = 'material-community';

    switch (routeName) {
        case 'HomeStack':
            iconName = focused ? 'home' : 'home-outline';
            break;
        case 'ProfileStack':
            iconName = focused ? 'account' : 'account-outline';
            break;
        case 'SearchStack':
            iconName = focused ? 'web' : 'web';
            break;
       
    }

    return { iconName, iconType };
};

const styles = StyleSheet.create({})