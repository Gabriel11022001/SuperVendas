import config from '@/app/config/config';
import { Cor } from '@/app/config/typesConfig';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import CadastroCliente from '../views/CadastroCliente';
import Clientes from '../views/Clientes';
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
      { /** tela gestão de clientes */ }
      <Stack.Screen name="clientes" component={ Clientes } options={ ({ navigation }) => {

        return {
          title: "Clientes",
          headerRight: () => {
            
            // botão para redirecionar o usuário para a tela de cadastro de cliente
            return <TouchableOpacity onPress={ () => {
              navigation.navigate("cadastro_cliente");
            } } >
              <Ionicons name="add" size={ 30 } color="#fff" />
            </TouchableOpacity>
          }
        }; 
      } } />
      { /** tela de cadastro de cliente */ }
      <Stack.Screen name="cadastro_cliente" component={ CadastroCliente } options={ {
        title: "Cadastro de Cliente"
      } } />
    </Stack.Navigator>
  </NavigationContainer>
}

export default Navigation;