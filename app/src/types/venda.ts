import Cliente from "./cliente";

export type Venda = {

  idVenda: number;
  codigoVenda: string;
  valorTotal: number;
  dataVenda: string;
  dataConclusaoVenda: string;
  status: StatusVenda;
  clienteVenda: Cliente;

}

export enum StatusVenda {

  concluido,
  rascunho

}
