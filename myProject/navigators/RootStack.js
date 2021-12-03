import React  from "react";

//React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Overview1 from '../Overview1'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Overview1" component={Overview1} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;