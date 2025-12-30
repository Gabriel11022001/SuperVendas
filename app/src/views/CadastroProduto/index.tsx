import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ScrollView } from "react-native";
import Botao from "../../components/Botao";
import Campo, { TipoCampo } from "../../components/Campo";
import Tela from "../../components/Tela";
import { CategoriaProduto, Produto } from "../../types/produto";

const CadastroProduto = ({ navigation, route }: any) => {

  const [ isCarregando, setIsCarregando ] = useState<boolean>(false);
  const [ idProdutoEditar, setIdProdutoEditar ] = useState<number>(0);
  const [ nomeProduto, setNomeProduto ] = useState<string>("");
  const [ precoCompra, setPrecoCompra ] = useState<string>("0");
  const [ precoVenda, setPrecoVenda ] = useState<string>("0");
  const [ percentualLucro, setPercentualLucro ] = useState<string>("");
  const [ ativo, setAtivo ] = useState<boolean>(false);
  const [ categoria, setCategoria ] = useState<CategoriaProduto | null>(null);
  const [ estoque, setEstoque ] = useState<number>(0);
  const [ descricao, setDescricao ] = useState<string>("");

  // state para os dados do produto que será editado
  const [ produtoEditar, setProdutoEditar ] = useState<Produto | null>(null);

  const [ categorias, setCategorias ] = useState<Array<CategoriaProduto>>([]);

  const [ erroNomeProduto, setErroNomeProduto ] = useState<string>("");
  const [ erroPrecoVenda, setErroPrecoVenda ] = useState<string>("");
  const [ erroPrecoCompra, setErroPrecoCompra ] = useState<string>("");
  const [ erroPercentualLucro, setErroPercentualLucro ] = useState<string>("");
  const [ erroEstoque, setErroEstoque ] = useState<string>("");
  const [ erroDescricao, setErroDescricao ] = useState<string>("");

  // listar categorias do produto
  const listarCategorias = async () => {

  }

  // prosseguir para a tela para selecionar as fotos do produto
  const prosseguir = () => {

    try {
      
      if (!produtoEditar) {
        navigation.navigate("fotos_produto", {
          produtoEditar: {

          }
        });
      } else {
        navigation.navigate("fotos_produto", {
          produtoEditar: {

          }
        });
      }

    } catch (e) {
      console.error("Erro ao tentar-se prosseguir: " + e);
      
      apresentarAlerta("erro", "Erro ao tentar-se prosseguir, tente novamente!");
    }

  }

  // buscar o produto pelo id
  const buscarProdutoPeloId = async () => {

  }

  // apresentar um alerta para o usuário(erro ou sucesso)
  const apresentarAlerta = (tipo: string, mensagem: string): void => {

  }

  useFocusEffect(useCallback(() => {

    if (route.params && route.params.idProdutoEditar != null && route.params.idProdutoEditar != undefined) {
      setIdProdutoEditar(route.params.idProdutoEditar);

      if (idProdutoEditar != 0 && produtoEditar != null) {
        
        if (route.params.produtoEditar != null) {
          setProdutoEditar({ ...route.params.produtoEditar });
        }

        setNomeProduto(produtoEditar.nome);
        setCategoria({ ...produtoEditar.categoria });
        setDescricao(produtoEditar.descricao ?? "");
        setPercentualLucro(produtoEditar.percentualLucro.toFixed(2).toString());
        setAtivo(produtoEditar.ativo);
        setPrecoCompra(produtoEditar.precoCompra.toFixed(2).toString());
        setPrecoVenda(produtoEditar.precoVenda.toFixed(2).toString());
        setEstoque(produtoEditar.estoque);
      } else {
        // buscar os dados do produto que será editado no servidor
        buscarProdutoPeloId();
      }

    } else {
      // está cadastrando o produto

      if (route.params && route.params.produtoEditar) {
        setProdutoEditar({ ...route.params.produtoEditar });

        if (produtoEditar != null) {
          setNomeProduto(produtoEditar.nome);
          setCategoria({ ...produtoEditar.categoria });
          setDescricao(produtoEditar.descricao ?? "");
          setPercentualLucro(produtoEditar.percentualLucro.toFixed(2).toString());
          setAtivo(produtoEditar.ativo);
          setPrecoCompra(produtoEditar.precoCompra.toFixed(2).toString());
          setPrecoVenda(produtoEditar.precoVenda.toFixed(2).toString());
          setEstoque(produtoEditar.estoque);
        }
        
      }

    }

  }, []));

  const onDigitarNomeProduto = (nomeProdutoDigitado: string): void => {
    setNomeProduto(nomeProdutoDigitado);

    if (nomeProdutoDigitado.trim() === "") {
      setErroNomeProduto("Informe o nome do produto!");
    } else if (nomeProdutoDigitado.trim().length < 3) {
      setErroNomeProduto("O nome do produto deve possuir no mínimo três caracteres!");
    } else {
      setErroNomeProduto("");
    }

  }

  const onDigitarDescricao = (descricaoDigitada: string): void => {
    setDescricao(descricaoDigitada);
    setErroDescricao("");

    if (descricaoDigitada.length > 0 && descricaoDigitada.length < 3) {
      setErroDescricao("A descriçao precisa possuir no mínimo três caracteres!");
    }
    
  }

  const onDigitarPrecoCompra = (precoCompraDigitado: string): void => {
    setPrecoCompra("");
    const precoCompraValidar: number = Number.parseFloat(precoCompraDigitado);

    setPrecoCompra(precoCompraDigitado);
    setErroPrecoCompra("");

    if (precoCompraDigitado.trim() === "") {
      setErroPrecoCompra("Informe o preço de compra!");

      return;
    }

    if (precoCompraValidar < 0) {
      setErroPrecoCompra("Preço de compra inválido!");
      
      return;
    }

    if (Number.parseFloat(precoVenda) != 0) {

      if (precoCompraValidar > Number.parseFloat(precoVenda)) {
        setErroPrecoCompra("O preço de compra não deve ser maior que o preço de venda!");
      }

    }

  }

  const onDigitarPercentualLucro = (percentualLucroDigitado: string): void => {
    setErroPrecoCompra("");
    setPercentualLucro("");
    setPercentualLucro(percentualLucroDigitado);
    setErroPercentualLucro("");

    if (percentualLucroDigitado.trim() === "") {
      setErroPercentualLucro("Informe o percentual de lucro!");

      return;
    }

    const percentualLucroValor: number = parseFloat(percentualLucroDigitado);

    if (percentualLucroValor < 0 || percentualLucroValor > 100) {
      setErroPercentualLucro("Percentual de lucro inválido!");
    } else {
      // calcular o preço de venda a partir do percentual de lucro
      calcularPrecoVenda(
        parseFloat(precoCompra) ?? 0,
        percentualLucroValor
      );
    }

  }

  const calcularPrecoVenda = (precoCompraValor: number, percentualLucroValor: number): void => {

    if (precoCompraValor > 0 && percentualLucroValor > 0) {
      const lucro: number = (percentualLucroValor / 100) * precoCompraValor;
      const valorVenda: number = precoCompraValor + lucro;

      console.log("lucro: " + lucro);
      console.log("valor de venda: " + valorVenda);

      setPrecoVenda(valorVenda.toFixed(2).toString());
    } else {
      setPrecoVenda("0");
    }

  }

  const onDigitarPrecoVenda = (precoVendaDigitado: string): void => {

  }

  return (
    <Tela>
      <ScrollView style={ { flex: 1 } }>
        { /** campo para o usuário informar o nome do produto */ }
        <Campo
          valor={ nomeProduto }
          placeholder="Digite o nome do produto..."
          habilitado={ true }
          label="Nome do produto"
          obrigatorio={ true }
          tamanhoMaximo={ 255 }
          tipoCampo={ TipoCampo.default }
          onAlterarValor={ (nomeProdutoDigitado: string) => {
            onDigitarNomeProduto(nomeProdutoDigitado);
          } }
          erroCampo={ erroNomeProduto } />
        { /** campo para o usuário informar a descrição do produto */ }
        <Campo
          valor={ descricao }
          placeholder="Digite a descrição do produto..."
          habilitado={ true }
          label="Descrição"
          obrigatorio={ false }
          tamanhoMaximo={ 255 }
          tipoCampo={ TipoCampo.default }
          onAlterarValor={ (descricaoDigitada: string) => {
            onDigitarDescricao(descricaoDigitada);
          } }
          erroCampo={ erroDescricao } />
        { /** campo para o usuário informar o preco de compra do produto */ }
        <Campo
          valor={ precoCompra }
          placeholder="Digite o preço de compra..."
          habilitado={ true }
          label="Preço de compra"
          obrigatorio={ true }
          tamanhoMaximo={ 255 }
          tipoCampo={ TipoCampo.dinheiro }
          onAlterarValor={ (precoCompraDigitado: string) => {
            onDigitarPrecoCompra(precoCompraDigitado);
          } }
          erroCampo={ erroPrecoCompra } />
        { /** campo para o usuário informar o percentual de lucro */ }
        <Campo
          valor={ percentualLucro }
          placeholder="Digite o percentual de lucro..."
          habilitado={ true }
          label="Percentual de lucro"
          obrigatorio={ true }
          tamanhoMaximo={ 255 }
          tipoCampo={ TipoCampo.numero }
          onAlterarValor={ (percentualLucroDigitado: string) => {
            onDigitarPercentualLucro(percentualLucroDigitado);
          } }
          erroCampo={ erroPercentualLucro } />
        { /** campo para o usuário informar o preco de venda do produto */ }
        <Campo
          valor={ precoVenda }
          placeholder="Digite o preço de venda..."
          habilitado={ true }
          label="Preço de venda"
          obrigatorio={ true }
          tamanhoMaximo={ 255 }
          tipoCampo={ TipoCampo.dinheiro }
          onAlterarValor={ (precoVendaDigitado: string) => {
            onDigitarPrecoVenda(precoVendaDigitado);
          } }
          erroCampo={ erroPrecoVenda } />
        { /** botão para prosseguir pafra a próxima tela */ }
        <Botao 
          texto="Prosseguir"
          onPressionar={ () => prosseguir() }
          habilitado={
            nomeProduto != ""
            && precoCompra != ""
            && precoVenda != ""
            && percentualLucro != ""
            && categoria != null
            && estoque != 0
            && erroNomeProduto === ""
            && erroDescricao === ""
            && erroPrecoVenda === ""
            && erroPercentualLucro === ""
            && erroPrecoCompra === ""
            && erroEstoque === ""
          } />
      </ScrollView>
    </Tela>
  );
}

export default CadastroProduto;