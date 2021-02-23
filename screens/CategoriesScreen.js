import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Color from '../constants/Color'
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTie from '../components/CategoryGridTie'

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTie
                title={itemData.item.title}
                image={itemData.item.image}
                onSelect={() => {
                    props.navigation.navigate('CategoryMeals', { categoryId: itemData.item.id })
                }} />
        );
    };
    return (
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
}
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        background: Color.primaryColor
    },
    headerTintColor: 'White'
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },


})

export default CategoriesScreen
