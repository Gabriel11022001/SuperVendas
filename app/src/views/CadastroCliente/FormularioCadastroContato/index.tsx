import Botao from "@/app/src/components/Botao";
import Campo, { TipoCampo } from "@/app/src/components/Campo";
import { View } from "react-native";
import styles from "./styles";

interface FormularioCadastroContatoProps {

  idContatoEditar: number;
  tipoContato: string;
  contato: string;
  erroContato: string;
  onDigitarContato: (contatoDigitado: string) => void;
  onSalvarContato: (idContatoEditar: number) => void;
  onFecharFormulario: () => void;

}

const FormularioCadastroContato = ({
  idContatoEditar,
  contato,
  tipoContato,
  erroContato,
  onDigitarContato,
  onSalvarContato,
  onFecharFormulario
}: FormularioCadastroContatoProps) => {

  return (
    <View style={ styles.container }>
      <View style={ styles.card }>
        { /** campo para o usuário informar o contato */ }
        <Campo
          valor={ contato }
          placeholder="Digite o contato"
          erroCampo={ erroContato }
          label="Contato"
          habilitado={ true }
          obrigatorio={ true }
          tamanhoMaximo={ 255 }
          tipoCampo={ tipoContato === "telefone" ? TipoCampo.telefone : TipoCampo.email }
          onAlterarValor={ (contatoDigitado: string) => {
            onDigitarContato(contatoDigitado);
          } } />
        <Botao texto="Salvar" habilitado={ erroContato === "" && contato.length > 0 } onPressionar={ () => {
          onSalvarContato(idContatoEditar);
        } } />
      </View>
    </View>
  );
}

export default FormularioCadastroContato;