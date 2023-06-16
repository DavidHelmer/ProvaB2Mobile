import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Login from "./src/pages/login";
import Dashboard from "./src/pages/dashboard/App";
import Password from "./src/pages/password";
import Register from "./src/pages/register";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Login" component={Login}/>     
        <Stack.Screen name= "Dashboard" component={Dashboard}/>
        <Stack.Screen name= "Password" component={Password}/>
        <Stack.Screen name= "Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

