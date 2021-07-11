import * as React from "react";
import { View, Text, Button, TextInput,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ margin: 10 }}>Home Screen 5 </Text>
    </View>
  );
}


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/check-icon.png')}
    />
  );
}

function StackScreen() {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: props => <LogoTitle {...props} /> }}
      />
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <StackScreen/>
    </NavigationContainer>
  );
}

export default App;
