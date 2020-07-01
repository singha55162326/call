import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';
import Login from './components/screens/login';
import Signup from './components/screens/signup';
import Dashboard from './components/screens/dashboard';
import Choise from './components/screens/Choise';
import Admin from './components/screens/Admin';
import Calling from './components/screens/Calling';
import Add from './components/screens/Add';
import Remove from './components/screens/Remove';


import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation';




const Stack = createStackNavigator();


function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 

      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
    
      />
     <Stack.Screen 
       name="Choise" 
       component={Choise}
      />
       <Stack.Screen 
       name="Admin" 
       component={Admin} 
    
      />
      <Stack.Screen 
       name="Calling" 
       component={Calling} 
    
      />
      <Stack.Screen 
       name="Add" 
       component={Add} 
    
      />
      <Stack.Screen 
       name="Remove" 
       component={Remove} 
    
      />
      
      
      


     
     
  
    </Stack.Navigator>
  );
}

  export default function AppContainer() {
    return(
      <NavigationContainer>
      <MainNavigator/>
      </NavigationContainer>
    )
  } 