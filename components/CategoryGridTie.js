import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'

const CategoryGridTie = props => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
            <ImageBackground source={{ uri: props.image }} style={styles.image}>
                <View>
                    <Text style={styles.titletext}>{props.title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity >
    )
}
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    titletext: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: "#000000a0",
        marginTop: 123
    }
})

export default CategoryGridTie
