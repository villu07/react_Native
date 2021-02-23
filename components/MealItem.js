import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { color } from 'react-native-reanimated';

const MealItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelectMeal} style={styles.mealItem}>
            <View>
                <View style={{ ...styles.mealHeader, ...styles.mealRow }}>
                    <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                        <Text style={styles.headerTitle}>
                            {props.title}
                        </Text>
                    </ImageBackground>
                </View>
                <View style={{ ...styles.mealDetails, ...styles.mealRow }}>
                    <Text style={styles.bottomText}>{props.duration}m</Text>
                    <Text style={styles.bottomText}>{props.complexity.toUpperCase()}</Text>
                    <Text style={styles.bottomText}>{props.afforability.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#000000a0',
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    bgImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%',
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bottomText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: "#000000a0",
        paddingVertical: 5
    }
})

export default MealItem;
