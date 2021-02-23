import React, { useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerActions, NavigationContainer } from '@react-navigation/native'
import { Platform, Text } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealScreen from '../screens/CategoriesMealScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FilterScreen from '../screens/FilterScreen'
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/actions/mealsAction';
import Color from '../constants/Color';



function MealsNevigator({ props, navigation, route }) {

    const availableMeals = useSelector(state => state.meals.meals);

    const dispatch = useDispatch();
    // const toggleFavoriteHandler = (route) => {

    //     const mealId =route.params.mealId;
    //     console.log(mealId);
    //     dispatch(toggleFavorite(mealId));

    // };

    const headerSty = {
        headerStyle: {
            backgroundColor: Color.primaryColor
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
    }

    const headerTit = (route) => {
        const catId = route.params.categoryId;
        const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
        return selectedCategory.title
    }
    const mealDeatilTitle = (route) => {
        const mealId = route.params.mealId;
        const selectedMeal = availableMeals.find(meal => meal.id === mealId)
        return selectedMeal.title

    }
    // const HeaderIcon = (route) => {
    //     return (
    //         <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //             <Item title="Favorite" iconName="ios-star" onPress={toggleFavoriteHandler(route)} />
    //         </HeaderButtons>
    //     );
    // }

    // const menuLeft = () => {
    //     return (
    //         <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //             <Item title="Menu" iconName="ios-menu" onPress={() => {
    //                 navigation.toggleDrawer()
    //             }} />
    //         </HeaderButtons>
    //     );
    // }
    const stack = createStackNavigator();

    return (
        <stack.Navigator initialRouteName="Categories">
            <stack.Screen options={{
                ...headerSty,
                headerTitle: "Meal's Categories",
                // headerLeft: menuLeft
            }} name="Categories" component={CategoriesScreen} />
            <stack.Screen options={
                ({ route }) => ({ ...headerSty, headerTitle: headerTit(route) })
            }
                name="CategoryMeals" component={CategoriesMealScreen} />
            <stack.Screen options={
                ({ route }) => ({
                    ...headerSty, headerTitle: mealDeatilTitle(route), headerRight:()=>
                        <MaterialIcons name="favorite-outline" size={30} color="#FFF" onPress={() => {
                            const mealId =route.params.mealId;
                            dispatch(toggleFavorite(mealId));
                        }
                        } />
                })
            }
                name="MealDetail" component={MealDetailsScreen} />
        </stack.Navigator>
    )
}

function FavStackNavigator({ navigation, route }) {
    const dispatch = useDispatch();
    const headerSty = {
        headerStyle: {
            backgroundColor: Color.primaryColor
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
    }
    // const headerRightIcon = () => {
    //     return (
    //         <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //             <Item title="Menu" iconName="ios-menu" onPress={() => {
    //                 navigation.toggleDrawer()
    //             }} />
    //         </HeaderButtons>
    //     );
    // }
    const stack = createStackNavigator()
    return (
        <stack.Navigator>
            <stack.Screen name="Favorites1" component={FavoritesScreen} options={{ ...headerSty, headerTitle: 'Your\'s Favorites' }} />
            <stack.Screen name="MealDetailScreen" component={MealDetailsScreen} options={({route})=>({
                ...headerSty, headerRight: () =>
                    <MaterialIcons name='favorite' size={30} color="#FFF" onPress={() => {
                            const mealId =route.params.mealId;
                            dispatch(toggleFavorite(mealId));
                        }
                        } />
                })
            } />
        </stack.Navigator>
    )
}

function MealsFavTabNavigator({ route }) {
    const tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();
    //const tab = createMaterialBottomTabNavigator();
    return (

        <tab.Navigator tabBarOptions={{ activeTintColor: Color.primaryColor }} shifting={true}>
            <tab.Screen name="Meals" component={MealsNevigator}
                options={{
                    tabBarColor: Color.primaryColor,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='ios-restaurant' color={color} size={25} />)
                }} />
            <tab.Screen name="Favorites" component={FavStackNavigator} options={{
                tabBarColor: Color.accentColor,
                tabBarIcon: ({ color, size }) => (<Ionicons name="ios-star" color={color} size={25} />)
            }} />
        </tab.Navigator>
    );
}
// function FilterNavigator({props, navigation, route }) {
//     const headerSty = {
//         headerStyle: {
//             backgroundColor: Color.primaryColor
//         },
//         headerTintColor: 'white',
//         headerTitleAlign: 'center',
//         headerTitle: 'Filter Meals'
//     }
//     const headerLeftIcon = () => {
//         return (
//             <HeaderButtons HeaderButtonComponent={HeaderButton}>
//                 <Item title="Menu" iconName="ios-menu" onPress={() => {
//                     navigation.toggleDrawer()
//                 }} />
//             </HeaderButtons>
//         );
//     }
//     const headerRightIcon = (route) => {
//         return (
//             <HeaderButtons HeaderButtonComponent={HeaderButton}>
//                 <Item title="save" iconName="ios-save" onPress={route.params.save()} />
//             </HeaderButtons>
//         );
//     }
//     const stack = createStackNavigator();

//     return (
//         <stack.Navigator>
//             <stack.Screen options={
//                 ({ route }) => ({ ...headerSty, headerLeft: headerLeftIcon, headerRight: () => <Ionicons name="save" onPress={route.state.params}/> })
//             }
//                 name="Filters" component={FilterScreen} />
//         </stack.Navigator>
//     );

//     // <stack.Screen options={
//     //     ({ route }) => ({ ...headerSty, headerTitle: headerTit(route) })
//     // }
//     //     name="CategoryMeals" component={CategoriesMealScreen} />
// }

export default function MainNavigator({ route }) {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContentOptions={{
                activeTintColor: Color.accentColor, labelStyle: {
                    fontSize: 15
                }
            }}>
                <Drawer.Screen name="MealFavs" component={MealsFavTabNavigator} options={{ drawerLabel: 'Meals' }} />
                {/* <Drawer.Screen name="Filters" component={FilterNavigator} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

// ({route})=>({headerTitle:route.params.categoryId})