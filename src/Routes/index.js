import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/Home';
import Details from '../views/Details';

const App = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <App.Navigator screenOptions={{headerShown: false}}>
            <App.Screen name={'Home'} component={Home} />
            <App.Screen name={'Details'} component={Details} />
        </App.Navigator>
    </NavigationContainer>
)

export default Routes;