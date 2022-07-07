/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Home, Profile, Form, Signup} from './components'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Users} from './UserContext'

const Stack = createNativeStackNavigator()

const App= () => {
  return (
    <Users>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
          <Stack.Screen name='Form' component={Form} options={{headerShown: false}}/>
          <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}}/>
          <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </Users>
  )
};



export default App;
