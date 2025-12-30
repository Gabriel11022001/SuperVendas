// produto
export type Produto = {

  produtoId?: number;
  nome: string;
  descricao?: string;
  dataCadastro: string;
  categoria: CategoriaProduto;
  precoVenda: number;
  precoCompra: number;
  percentualLucro: number;
  estoque: number;
  ativo: boolean;
  fotos: Array<FotoProduto>;

}

// foto do produto
export type FotoProduto = {

  fotoProdutoId: number;
  produtoId?: number;
  foto: string;
  extensao: string;

}

// categoria do produto
export type CategoriaProduto = {

  categoriaProdutoId: number;
  nomeCategoria: string;

}