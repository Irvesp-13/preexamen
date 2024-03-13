import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ImagenDestacada({ route }) {
    const { imageUrl, desc } = route.params;

    return (
        <View style={styles.container}>

            <Image source={{ uri: imageUrl }} style={styles.img} />

            <View style={styles.like}>
                <Text style={styles.textDesc}>{desc}</Text>
                <Text style={styles.text}>
                    15
                </Text>
                <Icon name='thumbs-up' size={30} />
                <View style={styles.share}>
                    <Icon name='paper-plane' size={30} style={{ marginRight: 10 }} />
                    <Icon name='share' size={30} />
                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    img: {
        width: 340,
        height: 320,
        resizeMode: 'contain',
        marginLeft: 22,
    },
    textDesc: {
        fontSize: 20,
        marginRight: 10,
    },
    like: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline'
    },
    text: {
        fontSize: 30,
        marginRight: 10,
        marginLeft: 10
    },
    share: {
        marginLeft: 60,
        flexDirection: 'row',
    }

});