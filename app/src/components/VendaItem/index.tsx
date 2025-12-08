import config from "@/app/config/config";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Text, TouchableOpacity, View } from "react-native";
import { StatusVenda, Venda } from "../../types/venda";
import styles from "./styles";

interface VendaItemProps {

  // método para redirecionar o usuário para a tela com detalhes da venda
  onVisualizarVenda: () => void;
  venda: Venda;
  
}

// componente que representa a venda
export default function VendaItem({ onVisualizarVenda, venda }: VendaItemProps) {

  return (
    <TouchableOpacity
      style={ styles.vendaItem }
      onPress={ onVisualizarVenda } >
        { /** icone e código da venda */ }
        <View style={ styles.containerIconeCodigoVenda }>
          <FontAwesome5 name="money-bill-alt" size={ 50 } color={ config.cores.find(cor => cor.nomeCor === "principal")?.cor } />;
          <View style={ styles.codigoVenda }>
            <Text>#{ venda.codigoVenda }</Text>
          </View>
        </View> 
        <View style={ styles.containerDadosLinha }>
          { /** nome do  cliente da venda */ }
          <View style={ styles.cardDado }>
            <Text style={ styles.tituloDado }>Cliente</Text>
            <Text style={ styles.txtDado }>{ venda.clienteVenda.nomeCompleto }</Text>
          </View>
          { /** valor total da venda */ }
          <View style={ styles.cardDado }>
            <Text style={ styles.tituloDado }>Valor total</Text>
            <Text style={ styles.txtDado }>R$ { venda.valorTotal.toFixed(2).toString() }</Text>
          </View>
        </View>
        <View style={ styles.containerDadosLinha }>
          { /** data de realização da venda */ }
          <View style={ styles.cardDado }>
            <Text style={ styles.tituloDado }>Data da venda</Text>
            <Text style={ styles.txtDado }>{ venda.dataVenda }</Text>
          </View>
          { /** data de conclusão da venda */ }
          <View style={ styles.cardDado }>
            <Text style={ styles.tituloDado }>Data de conclusão</Text>
            <Text style={ styles.txtDado }>{ venda.dataConclusaoVenda != "" ? venda.dataConclusaoVenda : "Em andamento" }</Text>
          </View>
        </View>
        <View style={ styles.containerDadosLinha }>
          { /** Status da venda */ }
          <View style={ styles.cardDado }>
            <Text style={ styles.tituloDado }>Status</Text>
            <Text style={ 
              venda.status === StatusVenda.rascunho ? styles.txtStatusRascunho : styles.txtStatusConcluida
            }>{ venda.status === StatusVenda.rascunho ? "Em andamento" : "Concluída" }</Text>
          </View>
        </View>
    </TouchableOpacity>
  );
}
