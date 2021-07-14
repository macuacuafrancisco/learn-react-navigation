import * as React from "react";
import { View, Text, Button, TextInput,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function Home() {
  return(
    <Text>
      Home
    </Text>
  )
}

function Profile(){
  return(
    <Text>
      Profile
    </Text>
  )
 
}
function Settings(){
   return(
    <Stack.Navigator>
        Settings
        </Stack.Navigator>
    )
}

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Root" component={Root} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
