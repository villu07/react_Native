import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import MealsNevigator from './navigation/MealsNevigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import mealsReducer from './store/reducers/meals';


const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer);

export default function App() {

  return (

    <Provider store={store}>
      <MealsNevigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
