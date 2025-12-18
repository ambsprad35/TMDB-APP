/*
  TMDB App - Created by Amber Spradley
  This application allows users to view the trending movies and shows
  listed on TMDB.  Each movie and show can be pressed, opening a 
  modal dialogue that displays the title, release date (movies),
  last air date (tv shows) and number of users who have favorited 
  the show or movie.
*/

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TrendingMovies from './Movies';
import TrendingTV from './Shows';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Trending Movies" component={TrendingMovies} />
        <Tab.Screen name="Trending TV" component={TrendingTV} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
