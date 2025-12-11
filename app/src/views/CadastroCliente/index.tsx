import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Botao from "../../components/Botao";
import Campo, { TipoCampo } from "../../components/Campo";
import Loader from "../../components/Loader";
import Tela from "../../components/Tela";
import Contato from "../../types/contato";
import Endereco from "../../types/endereco";
import FormularioCadastroContato from "./FormularioCadastroContato";
import styles from "./styles";

const CadastroCliente = ({ navigation, route }: any) => {

  const [ isCarregando, setIsCarregando ]                 = useState<boolean>(false);
  const [ idClienteEditar, setIdClienteEditar ]           = useState<number>(0);
  const [ nomeCompleto, setNomeCompleto ]                 = useState<string>("");
  const [ cpf, setCpf ]                                   = useState<string>("");
  const [ dataNascimento, setDataNascimento ]             = useState<string>("");
  const [ genero, setGenero ]                             = useState<string>("");
  const [ contatos, setContatos ]                         = useState<Contato[]>([]);
  const [ enderecos, setEnderecos ]                       = useState<Endereco[]>([]);

  const [ erroNomeCompleto, setErroNomeCompleto ]         = useState<string>("");
  const [ erroCpf, setErroCpf ]                           = useState<string>("");
  const [ erroDataNascimento, setErroDataNascimento ]     = useState<string>("");
  const [ erroContato, setErroContato ]                   = useState<string>("");
  const [ erroCep, setErroCep ]                           = useState<string>("");
  const [ erroLogradouro, setErroLogradouro ]             = useState<string>("");
  const [ erroCidade, setErroCidade ]                     = useState<string>("");
  const [ erroBairro, setErroBairro ]                     = useState<string>("");
  const [ erroNumero, setErroNumero ]                     = useState<string>("");

  const [ camposDesabilitados, setCamposDesabilitados ]   = useState<string[]>([]);

  // gestão de contatos
  const [ apresentarFormularioCadastroContato, setApresentarFormularioCadastroContato ] = useState<boolean>(false);
  const [ idContatoAtualEditar, setIdContatoAtualEditar ] = useState<number>(0);
  const [ tipoContatoAtual, setTipoContatoAtual ] = useState<string>("");
  const [ contatoAtual, setContatoAtual ] = useState<string>("");

  // abrir o formulário de cadastro/edicao de contato
  const abrirFormularioCadastroContato = (edicao: boolean, idContatoEditar: number = 0, tipoContatoEditar: string = "", contatoEditar: string = ""): void => {

    if (!edicao) {
      setIdContatoAtualEditar(0);
      setTipoContatoAtual("");
      setContatoAtual("");
      setErroContato("");
    } else {
      setIdContatoAtualEditar(idContatoEditar);
      setTipoContatoAtual(tipoContatoEditar);
      setContatoAtual(contatoEditar);
      setErroContato("");
    }

    if (contatos.length === 3) {
      apresentarAlertaErro("Só é possível possuir três contatos!");

      return;
    }

    setApresentarFormularioCadastroContato(true);
  }

  // buscar os dados do cliente pelo id no servidor
  const buscarDadosClientePeloId = async (idCliente: number) => {

    try {

    } catch (e) {
      // apresentar um alerta de erro
    }

  }

  // cadastrar o cliente no servidor
  const cadastrar = async () => {
    
  }

  // editar o cliente no servidor
  const editar = async () => {

  }

  // salvar o cliente no servidor
  const salvar = async () => {

    try {

      if (idClienteEditar == 0) {
        await cadastrar();
      } else {
        await editar();
      }

    } catch (e) {

    }

  }

  useEffect(() => {
    // buscar os dados do cliente pelo id
    buscarDadosClientePeloId(idClienteEditar);
  }, [ idClienteEditar ]);
  
  useFocusEffect(useCallback(() => {

    if (route.params) {

      if (route.params.idClienteEditar) {
        setIdClienteEditar(route.params.idClienteEditar);
      }

    }

  }, []));

  const onDigitarNomeCompleto = (nomeCompletoDigitado: string) => {
    setNomeCompleto(nomeCompletoDigitado);
    setErroNomeCompleto("");

    try {

      if (nomeCompletoDigitado.trim() === "") {
          setErroNomeCompleto("Informe o nome completo!");
      } else if (nomeCompletoDigitado.length < 3) {
        setErroNomeCompleto("O nome completo precisa ter no mínimo três caracteres!");
      }

    } catch (e) {
      setErroNomeCompleto("Erro ao tentar-se informar o nome completo!");
    }

  }

  const apresentarAlertaSucesso = (mensagem: string): void => {

  }

  const apresentarAlertaErro = (erro: string): void => {

  }

  // salvar contato na lista de contatos
  const salvarContato = (): void => {

    try {

      if (idContatoAtualEditar === 0) {
        // adicionar um contato novo
        const contatosCopia: Array<Contato> = [ ...contatos ];

        contatosCopia.push({
          id: 0,
          tipo: tipoContatoAtual,
          valorContato: contatoAtual
        });

        setContatos([]);

        setContatos(contatosCopia);
        setIdContatoAtualEditar(0);
        setTipoContatoAtual("");
        setContatoAtual("");
        setApresentarFormularioCadastroContato(false);

        // apresentar um alerta de sucesso para o usuário
        apresentarAlertaSucesso("Contato adicionado com sucesso na listagem!");
      } else {
        // editar um contato
        const contatosCopia: Contato[] = contatos.map((contatoIndiceAtual: Contato) => {

          if (contatoIndiceAtual.id === idContatoAtualEditar) {

            return {
              id: contatoIndiceAtual.id,
              tipo: tipoContatoAtual,
              valorContato: contatoAtual
            };
          }

          return contatoIndiceAtual;
        });

        setContatos([]);
        
        setContatos(contatosCopia);
        setIdContatoAtualEditar(0);
        setTipoContatoAtual("");
        setContatoAtual("");
        setApresentarFormularioCadastroContato(false);
      }

    } catch (e) {
      setErroContato("Erro ao tentar-se salvar o contato!");
    }

  }

  return <Tela>
    { isCarregando && <Loader mensagem="Carregando, aguarde..." /> }
    { /** formulário para adicionar/editar um contato */ }
    { apresentarFormularioCadastroContato && <FormularioCadastroContato
      contato={ contatoAtual }
      tipoContato={ tipoContatoAtual }
      erroContato={ erroContato }
      idContatoEditar={ idContatoAtualEditar }
      onDigitarContato={ (contatoDigitado: string) => {
        setContatoAtual(contatoDigitado);

        setErroContato("");

        if (contatoDigitado.trim() === "") {
          setErroContato("Informe o contato!");
        } else {

          if (tipoContatoAtual === "telefone") {

          } else {
              
          }

        }

      } }
      onSalvarContato={ () => {
        salvarContato();
      } }
      onFecharFormulario={ () => {
        setApresentarFormularioCadastroContato(false);
        setIdContatoAtualEditar(0);
        setTipoContatoAtual("");
        setContatoAtual("");
        setErroContato("");
      } } />
    }
    <ScrollView style={ { flex: 1 } }>
      { /** campo para informar o nome completo do cliente */ }
      <Campo
        valor={ nomeCompleto }
        placeholder="Digite o nome completo..."
        label="Nome completo"
        habilitado={ !camposDesabilitados.includes("nome_completo") }
        obrigatorio={ true }
        tamanhoMaximo={ 255 }
        tipoCampo={ TipoCampo.default }
        onAlterarValor={ (nomeDigitado) => {
          onDigitarNomeCompleto(nomeDigitado);
        } }
        erroCampo={ erroNomeCompleto } />
      { /** campo para informar o cpf do cliente */ }
      <Campo
        valor={ cpf }
        placeholder="Digite o cpf..."
        label="CPF"
        habilitado={ !camposDesabilitados.includes("cpf") }
        obrigatorio={ true }
        tamanhoMaximo={ 14 }
        tipoCampo={ TipoCampo.cpf }
        onAlterarValor={ (cpfDigitado) => {
          setCpf(cpfDigitado);
        } }
        erroCampo={ erroCpf } />
      { /** campo para informar a data de nascimento do cliente */ }
      <Campo
        valor={ dataNascimento }
        placeholder="00/00/0000"
        label="Data de nascimento"
        habilitado={ !camposDesabilitados.includes("data_nascimento") }
        obrigatorio={ true }
        tamanhoMaximo={ 10 }
        tipoCampo={ TipoCampo.dataNascimento }
        onAlterarValor={ (dataNascimentoDigitada) => {
          setDataNascimento(dataNascimentoDigitada);
        } }
        erroCampo={ erroDataNascimento } />
      { /** container para gerenciar contatos */ }
      <View style={ styles.containerAdicionarContato }>
        <Text style={ styles.txtAdicionarContato }>Contatos</Text>
        <TouchableOpacity onPress={ () => {
          abrirFormularioCadastroContato(
            false,
            0,
            "",
            ""
          );
        } } >
          <FontAwesome6 name="add" size={ 40 } color="black" />
        </TouchableOpacity>
      </View>
      <Botao
        texto="Salvar"
        habilitado={ true }
        onPressionar={ () => {
          console.log(contatos);
        } } />
    </ScrollView>
  </Tela>
}

export default CadastroCliente;