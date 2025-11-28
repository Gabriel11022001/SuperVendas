import { ScrollView, Text } from "react-native";
import Tela from "../../components/Tela";

const Login = () => {

  return <Tela>
    <ScrollView style={ { flex: 1 } } showsVerticalScrollIndicator={ false }>
      <Text>Tela de login</Text>
    </ScrollView>
  </Tela>
}

export default Login;