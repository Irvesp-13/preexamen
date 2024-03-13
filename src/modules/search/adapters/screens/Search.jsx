import { StyleSheet, Text, View, FlatList, Image, } from 'react-native';
import React from 'react';
import SearchBar from './components/SearchBar';

const imgUrls = [
    {
        key: '1',
        uri: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        key: '2',
        uri: 'https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg',
    },
    {
        key: '3',
        uri: 'https://img.freepik.com/fotos-premium/hermosos-paisajes-paisajes-naturales-hacen-que-personas-relajen-disfruten-fondo-pantalla_917506-214429.jpg',
    },
    {
        key: '4',
        uri: 'https://st5.depositphotos.com/64145070/64693/i/450/depositphotos_646930840-stock-photo-sunset-ocean-beach-beautiful-seascape.jpg',
    },
    {
        key: '5',
        uri: 'https://static.vecteezy.com/system/resources/previews/013/598/615/non_2x/paradise-island-beach-tropical-landscape-of-summer-scenery-sea-sand-sky-palm-trees-luxury-travel-vacation-destination-exotic-beach-landscape-amazing-nature-relax-freedom-nature-concept-maldives-photo.jpg',
    },
    {
        key: '6',
        uri: 'https://hips.hearstapps.com/hmg-prod/images/blyde-river-1524637082.jpg?crop=1.00xw:0.753xh;0,0.171xh&resize=640:*',
    }
];

export default function Search() {

    const renderItem = ({ item }) => (
        <Image source={{ uri: item.uri }} style={styles.image} />
    );

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <SearchBar />
            </View>

            <View style={styles.row}>
                <FlatList
                    data={imgUrls.slice(0, 3)}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal

                />
            </View>
            <View style={styles.row}>
                <FlatList
                    data={imgUrls.slice(3)}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20,
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10,
        marginHorizontal: 5,
        marginLeft: 10,
    },
    search: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 300,
        borderRadius: 10,
        marginBottom: 20
    }
});
