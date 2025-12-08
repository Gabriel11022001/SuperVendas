import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CardEstatistica from "../../components/CardEstatistica";
import ListagemUltimasVendas from "../../components/ListagemUltimasVendas";
import OpcaoMenuHome from "../../components/OpcaoMenuHome";
import Tela from "../../components/Tela";
import UsuarioLogin from "../../types/usuario";
import { StatusVenda, Venda } from "../../types/venda";
import styles from "./styles";

type OpcaoMenuHome = {

  titulo: string;
  icone: string;
  telaRedirecionar: string;
  primeiro?: boolean;
  ultimo?: boolean;

}

const Home = ({ navigation }: any) => {

  const [ usuarioLogado, setUsuarioLogado ] = useState<UsuarioLogin | null>(null);
  const [ dadosEstatisticos, setDadosEstatisticos ] = useState<Array<Array<{ texto: string, icone: string, valor: string, cardValorDinheiro: boolean }>>>([]);
  const [ ultimasVendas, setUltimasVendas ] = useState<Array<Venda>>([]);

  // obter o usuário logado no app no asyncstorage
  const getUsuarioLogadoApp = async () => {

  }

  const getOpcoesMenuHome = (): OpcaoMenuHome[] => {
    const opcoes: OpcaoMenuHome[] = [];

    opcoes.push({ titulo: "Clientes", icone: "person", telaRedirecionar: "clientes", primeiro: true });
    opcoes.push({ titulo: "Produtos", icone: "product", telaRedirecionar: "produtos" });
    opcoes.push({ titulo: "Vendas", icone: "money-bill-alt", telaRedirecionar: "vendas" });
    opcoes.push({ titulo: "Nova Venda", icone: "money-bill-alt", telaRedirecionar: "nova_venda" });
    opcoes.push({ titulo: "Perfil", icone: "person", telaRedirecionar: "perfil", ultimo: true });

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
  
  useFocusEffect(useCallback(() => {
     // obter o usuário logado no app
    getUsuarioLogadoApp();

    // buscar dados estatísticos para apresentar na tela inicial
    buscarDadosEstatisticos();

    // consultar ultimas vendas 
    consultarUltimasVendas();
  }, []));

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

  // consultar ultimas vendas realizadas
  const consultarUltimasVendas = async () => {

    try {
      setUltimasVendas([
        {
          idVenda: 1,
          codigoVenda: "12346767",
          dataConclusaoVenda: "",
          dataVenda: "11/02/2026",
          status: StatusVenda.concluido,
          valorTotal: 20000,
          clienteVenda: {
            idCliente: 1,
            nomeCompleto: "Cliente da venda de teste",
            cpf: "123.456.789-00",
            dataNascimento: "11/02/2001",
            genero: "Masculino",
            contatos: [ { tipo: "telefone", valorContato: "(14) 99877-9876" } ],
            enderecos: [ { cep: "19026665", logradouro: "Endereço de teste", bairro: "Bairro de teste", cidade: "Bastos", complemento: "", estado: "SP", numero: "124" } ]
          }
        },
        {
          idVenda: 2,
          codigoVenda: "12346767",
          dataConclusaoVenda: "",
          dataVenda: "11/02/2026",
          status: StatusVenda.rascunho,
          valorTotal: 20000,
          clienteVenda: {
            idCliente: 1,
            nomeCompleto: "Cliente da venda de teste",
            cpf: "123.456.789-00",
            dataNascimento: "11/02/2001",
            genero: "Masculino",
            contatos: [ { tipo: "telefone", valorContato: "(14) 99877-9876" } ],
            enderecos: [ { cep: "19026665", logradouro: "Endereço de teste", bairro: "Bairro de teste", cidade: "Bastos", complemento: "", estado: "SP", numero: "124" } ]
          }
        }
      ]);
    } catch (e) {
      
    }

  }

  return (
    <Tela>
      <ScrollView style={ { flex: 1 } } showsHorizontalScrollIndicator={ false } >
        { /** mensagem de bem vindo */ }
        <Text style={ styles.txtBemVindo }>Olá { usuarioLogado != null ? usuarioLogado.nome : "---" }</Text>
        { /** dados estatísticos do app */ }
        { listarContainerDadosEstatisticos() }
        <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false } style={ { marginStart: "5%", marginEnd: "5%" } } >
          { opcoesMenuHome.map((opcaoMenuHome) => {
          
            return <OpcaoMenuHome 
              titulo={ opcaoMenuHome.titulo } 
              icone={ opcaoMenuHome.icone } 
              telaRedirecionar={ opcaoMenuHome.telaRedirecionar } 
              onRedirecionar={ () => {
                redirecionar(opcaoMenuHome.telaRedirecionar);
              } }
              primeiro={ opcaoMenuHome.primeiro }
              ultimo={ opcaoMenuHome.ultimo } />
          }) }
        </ScrollView>
        { /** container com opção de visualizar mais vendas */ }
        <View style={ styles.containerVisualizarMaisVendas }>
          <Text style={ styles.txtUltimasVendas }>Ultimas vendas</Text>
          <TouchableOpacity onPress={ () => {
            // redirecionar o usuário para a tela com a listagem de todas as vendas
            redirecionar("vendas");
          } } >
            <Text style={ styles.txtBtnVisualizarMaisVendas }>Visualizar mais</Text>
          </TouchableOpacity>
        </View>
        { /** listagem das ultimas vendas do app */ }
        <ListagemUltimasVendas ultimasVendas={ ultimasVendas } onRedirecionarVisualizarDetalhesVenda={ (idVendaVisualizar: number) => {
          // redirecionar o usuário para a tela de visualizar detalhes da venda
          navigation.navigate("detalhes_venda", { idVendaVisualizar: idVendaVisualizar });
        } } />
      </ScrollView>
    </Tela>
  );
}

export default Home;