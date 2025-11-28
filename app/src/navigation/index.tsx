import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/Login';
import SplashScreen from '../views/SplashScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {

  return <NavigationContainer>
    <Stack.Navigator initialRouteName="splash">
      { /** splash screen */ }
      <Stack.Screen name="splash" component={ SplashScreen } options={ {
        headerShown: false
      } } />
      { /** tela de login */ }
      <Stack.Screen name="login" component={ Login } options={ {
        title: "Login",
        headerBackVisible: false
      } } />
    </Stack.Navigator>
  </NavigationContainer>
}

export default Navigation;