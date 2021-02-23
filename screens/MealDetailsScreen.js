import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';

const MealDetailsScreen = (props, { route }) => {
    const mealId = props.route.params.mealId;
    const availableMeals = useSelector(state => state.meals.meals)
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.bottomText}>{selectedMeal.duration}m</Text>
                <Text style={styles.bottomText}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style={styles.bottomText}>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <Text style={styles.listItem} key={ingredient}>{ingredient}</Text>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <Text style={styles.listItem} key={step}>{step}</Text>)}
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})
export default MealDetailsScreen
