import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Switch, Platform } from 'react-native'
import Colors from '../constants/Color'

const FilterScreen = props => {

    const [isGlutenFree, setGlutenFree] = useState(false);
    const [isLactoseFree, setLactoseFree] = useState(false);
    const [isVegan, setVegan] = useState(false);
    const [isVegitarian, setVegitarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            gultenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegitarian: isVegitarian
        }
        console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegitarian]);

    useEffect(() => {
        props.navigation.setParams({ save: saveFilters })
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <View style={styles.filterContainer}>
                <Text>Gluten-free</Text>
                <Switch
                    thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                    value={isGlutenFree}
                    onValueChange={newValue => setGlutenFree(newValue)}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text>Lactose-free</Text>
                <Switch
                    thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                    value={isLactoseFree}
                    onValueChange={newValue => setLactoseFree(newValue)}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text>Vegan</Text>
                <Switch
                    thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                    value={isVegan}
                    onValueChange={newValue => setVegan(newValue)}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text>Vegitarian</Text>
                <Switch
                    thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                    value={isVegitarian}
                    onValueChange={newValue => setVegitarian(newValue)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    },
})

export default FilterScreen
