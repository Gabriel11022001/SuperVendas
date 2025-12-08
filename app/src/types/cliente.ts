import Contato from "./contato";
import Endereco from "./endereco";

type Cliente = {

  idCliente: number;
  nomeCompleto: string;
  cpf: string;
  dataNascimento: string;
  genero: string;
  contatos: Array<Contato>;
  enderecos: Array<Endereco>;

}

export default Cliente;