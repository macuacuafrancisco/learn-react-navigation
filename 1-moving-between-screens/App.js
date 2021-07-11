import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Home Screan </Text>
      <Button
        title="Go To Details"
        onPress={() => {
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "anything i need",
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)} </Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="To Again to Details"
        onPress={() => {
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100),
          });
        }}
      />
      <Button
        title="Go BAck"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="Go Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title="Go Back to first Screen in stack"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Our custum title" }}
          initialParams={{ itemId: 42 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
