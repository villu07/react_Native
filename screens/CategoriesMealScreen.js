import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import MealItem from '../components/MealItem'

const CategoriesMealScreen = (props, { navigation, route }) => {

    const catId = props.route.params.categoryId;

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    const renderMealItem = (itemData) => {
        return (
            <MealItem title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                afforability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetail', { mealId: itemData.item.id })
                }} />
        );
    }
    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} style={{ width: '90%' }} />
        </View>
    );
}
// CategoriesMealScreen.navigationOptions = navigationData => {
//     const catId = props.route.params.categoryId;
//     console.log(catId);
//     const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
//     return {
//         headerTitle: selectedCategory.title
//     }
// };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoriesMealScreen
