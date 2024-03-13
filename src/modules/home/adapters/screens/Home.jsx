import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native-elements';
export default function Home() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../../../assets/img/myImage.jpg')} style={styles.img} />

            <View style={styles.like}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    img: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        marginLeft: 88,

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
        marginLeft: 160,
        flexDirection: 'row',
    }
})
