import * as React from "react";
import { View, Text, Button, TextInput,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


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
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          headerTitle: props => <LogoTitle {...props} />,
        })}
      />
    </Stack.Navigator>
  );
}

function HomeScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return <Text>Count: {count}</Text>;
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
