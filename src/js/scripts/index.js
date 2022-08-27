import { Api } from "../api.js";

const rederCard = (pessoa) => {
  const li = document.createElement("li");
  const name = document.createElement("h2");
  const div = document.createElement("div");
  const dados = document.createElement("h3");
  const email = document.createElement("p");
  const idade = document.createElement("p");
  const cpf = document.createElement("p");
  const sexo = document.createElement("p");
  const informacao = document.createElement("div");
  const cep = document.createElement("h3");
  const estado = document.createElement("p");
  const bairro = document.createElement("p");
  const rua = document.createElement("p");
  const numero = document.createElement("p");

  li.classList.add("card");

  name.innerText = pessoa.nome;
  dados.innerText = "Dados Pessoais";
  email.innerText = pessoa.email;
  idade.innerText = pessoa.idade;
  cpf.innerText = pessoa.cpf;
  sexo.innerText = pessoa.sexo;
  cep.innerText = pessoa.endereco.cep;
  estado.innerText = pessoa.endereco.estado;
  bairro.innerText = pessoa.endereco.bairro;
  rua.innerText = pessoa.endereco.rua;
  numero.innerText = pessoa.endereco.numero;

  div.append(email, idade, cpf, sexo);
  informacao.append(cep, estado, bairro, rua, numero);
  li.append(name, div, informacao);

  return li;
};

const renderizaCards = async () => {
  const armazena = await Api.listarClientes();
  const ul = document.querySelector(".container");
  console.log(armazena);
  armazena.forEach((element) => {
    ul.append(rederCard(element));
  });
};

renderizaCards();
