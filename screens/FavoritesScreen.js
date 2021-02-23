import React from 'react'
import { View,Text, StyleSheet, FlatList } from 'react-native'

import { useSelector } from 'react-redux';
import MealItem from '../components/MealItem'


const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);
    //const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.Id === mealId));

    if (favMeals.length === 0 || !favMeals)
    {
        return <View style={styles.content}>
            <Text>No Favorite Meals Are Found. Start Adding Some !</Text>
        </View>    
    }

    const renderMealItem = (itemData) => {
        return (
            <MealItem title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                afforability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetailScreen', { mealId: itemData.item.id })
                }} />
        );
    }
    return (
        <View style={styles.screen}>
            <FlatList data={favMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} style={{ width: '90%' }} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default FavoritesScreen
