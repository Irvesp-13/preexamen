import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchBar() {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Buscar...'
                placeholderTextColor="#888"
            />
            <Icon name="search" size={20} color="#888" style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginTop: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 10,
        color: '#333',
    },
    icon: {
        marginLeft: 10,
    },
});
