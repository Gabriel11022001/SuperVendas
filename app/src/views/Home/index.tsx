import { ScrollView } from "react-native";
import Tela from "../../components/Tela";

type OpcaoMenuHome = {

}

const Home = ({ navigation }: any) => {

  const opcoesMenuHome: OpcaoMenuHome[] = [];

  // realizar logout
  const logout = async () => {

  }

  // fazer logout e retornar para a tela de login
  const retornar = (): void => {

  }

  return (
    <Tela>
      <ScrollView style={ { flex: 1 } } showsHorizontalScrollIndicator={ false } >

      </ScrollView>
    </Tela>
  );
}

export default Home;