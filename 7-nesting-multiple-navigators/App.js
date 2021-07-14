import * as React from "react";
import { View, Text, Button, TextInput,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';



const NestedStack = createStackNavigator();
const RootStack = createDrawerNavigator();

function EditPost(){
  return <Text>
      Edit Post
    </Text>
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


function Home() {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen name="Profile" component={Profile} />
      <NestedStack.Screen name="Settings" component={Settings} />
    </NestedStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="EditPost" component={EditPost} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
