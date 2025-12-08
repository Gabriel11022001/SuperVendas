import { FlatList, Text } from "react-native";
import { Venda } from "../../types/venda";
import VendaItem from "../VendaItem";
import styles from "./styles";

interface ListagemUltimasVendasProps {

  // método para redirecionar o usuário para a tela de visualizar os detalhes da venda
  onRedirecionarVisualizarDetalhesVenda: (idVendaVisualizar: number) => void;
  ultimasVendas: Venda[];

}

const ListagemUltimasVendas = ({ onRedirecionarVisualizarDetalhesVenda, ultimasVendas }: ListagemUltimasVendasProps) => {

  if (ultimasVendas.length == 0) {

    return <Text style={ styles.txtNaoExistemUltimasVendas }>
      Não foram realizadas vendas...
    </Text>
  }

  return (
    <FlatList data={ ultimasVendas } renderItem={ ({ item }) => {

      return <VendaItem venda={ item } onVisualizarVenda={ () => {
        onRedirecionarVisualizarDetalhesVenda(item.idVenda);
      } } />
    } } />
  );
}

export default ListagemUltimasVendas;