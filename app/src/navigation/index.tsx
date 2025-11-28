import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/Login';

const Stack = createNativeStackNavigator();

const Navigation = () => {

  return <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
      { /** tela de login */ }
      <Stack.Screen name="login" component={ Login } />
    </Stack.Navigator>
  </NavigationContainer>
}

export default Navigation;