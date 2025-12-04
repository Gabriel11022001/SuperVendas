import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import CardEstatistica from "../../components/CardEstatistica";
import OpcaoMenuHome from "../../components/OpcaoMenuHome";
import Tela from "../../components/Tela";
import UsuarioLogin from "../../types/usuario";
import styles from "./styles";

type OpcaoMenuHome = {

  titulo: string;
  icone: string;
  telaRedirecionar: string;

}

const Home = ({ navigation }: any) => {

  const [ usuarioLogado, setUsuarioLogado ] = useState<UsuarioLogin | null>(null);
  const [ dadosEstatisticos, setDadosEstatisticos ] = useState<Array<Array<{ texto: string, icone: string, valor: string, cardValorDinheiro: boolean }>>>([]);

  // obter o usuário logado no app no asyncstorage
  const getUsuarioLogadoApp = async () => {

  }

  const getOpcoesMenuHome = (): OpcaoMenuHome[] => {
    const opcoes: OpcaoMenuHome[] = [];

    opcoes.push({ titulo: "Clientes", icone: "", telaRedirecionar: "clientes" });
    opcoes.push({ titulo: "Produtos", icone: "", telaRedirecionar: "produtos" });
    opcoes.push({ titulo: "Vendas", icone: "", telaRedirecionar: "vendas" });
    opcoes.push({ titulo: "Nova Venda", icone: "", telaRedirecionar: "nova_venda" });
    opcoes.push({ titulo: "Perfil", icone: "", telaRedirecionar: "perfil" });

    return opcoes;
  }

  // opções do menu home
  const opcoesMenuHome: OpcaoMenuHome[] = getOpcoesMenuHome();

  // realizar logout
  const logout = async () => {

  }

  // fazer logout e retornar para a tela de login
  const retornar = (): void => {

  }

  const redirecionar = (tela: string): void => {

  }

  const buscarDadosEstatisticos = async () => {
    setDadosEstatisticos(
      [
        [
          { texto: "Clientes", valor: "200", icone: "person", cardValorDinheiro: false },
          { texto: "Produtos", valor: "100", icone: "product", cardValorDinheiro: false }
        ],
        [
          { texto: "Vendas em rascunho", valor: "199", icone: "edit", cardValorDinheiro: false },
          { texto: "Vendas concluídas", valor: "201", icone: "like", cardValorDinheiro: false }
        ],
        [
          { texto: "Valor total em estoque R$", valor: "R$9.000.000,00", icone: "money-bill-alt", cardValorDinheiro: true }
        ]
      ]
    );
  }

  useEffect(() => {
    // obter o usuário logado no app
    getUsuarioLogadoApp();

    // buscar dados estatísticos para apresentar na tela inicial
    buscarDadosEstatisticos();
  }, []);

  // listar os dados estatisticos para apresentar na tela inicial
  const listarContainerDadosEstatisticos = () => {
    const componentes = [];

    for (let i: number = 0; i < dadosEstatisticos.length; i++) {
      
      componentes.push(<View style={ styles.containerLinhaEstatistica }>
        { dadosEstatisticos[ i ].map((dado) => {

          return <CardEstatistica icone={ dado.icone } texto={ dado.texto } valor={ dado.valor } cardValorDinheiro={ dado.cardValorDinheiro } />
        }) }
      </View>);

    }

    return <View>
      { componentes }
    </View>
  }

  return (
    <Tela>
      <ScrollView style={ { flex: 1 } } showsHorizontalScrollIndicator={ false } >
        { /** mensagem de bem vindo */ }
        <Text style={ styles.txtBemVindo }>Olá { usuarioLogado != null ? usuarioLogado.nome : "---" }</Text>
        { /** dados estatísticos do app */ }
        { listarContainerDadosEstatisticos() }
      </ScrollView>
    </Tela>
  );
}

export default Home;