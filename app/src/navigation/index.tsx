import config from '@/app/config/config';
import { Cor } from '@/app/config/typesConfig';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import Login from '../views/Login';
import SplashScreen from '../views/SplashScreen';

const Stack = createNativeStackNavigator();

// cor principal do projeto
const corPrincipal: Cor | undefined = config.cores.find(cor => cor.nomeCor === "principal");

// cor dos textos do menu
const corTextosMenu: string = corPrincipal?.cor === "#fff" ? "#000" : "#fff";

const Navigation = () => {

  return <NavigationContainer>
    <Stack.Navigator 
      initialRouteName="splash"
      screenOptions={ {
        headerStyle: {
          backgroundColor: corPrincipal?.cor
        },
        headerTintColor: corTextosMenu,
        headerTitleAlign: "center"
      } } >
      { /** splash screen */ }
      <Stack.Screen name="splash" component={ SplashScreen } options={ {
        headerShown: false
      } } />
      { /** tela de login */ }
      <Stack.Screen name="login" component={ Login } options={ {
        title: "Login",
        headerBackVisible: false
      } } />
      { /** tela home do app */ }
      <Stack.Screen name="home" component={ Home } options={ {
        title: "Home"
      } } />
    </Stack.Navigator>
  </NavigationContainer>
}

export default Navigation;