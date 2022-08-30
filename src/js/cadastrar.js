import { Api } from "../js/api.js";

const registro = (event) => {
  event.preventDefault();

  const name = document.getElementById("0");
  const email = document.getElementById("1");
  const idade = document.getElementById("2");
  const cpf = document.getElementById("3");
  const sexo = document.getElementById("4");
  const cep = document.getElementById("5");
  const rua = document.getElementById("6");
  const numeroCasa = document.getElementById("7");
  const bairro = document.getElementById("8");
  const cidade = document.getElementById("9");
  const estado = document.getElementById("10");

  const data = {
    nome: name.value,
    email: email.value,
    sexo: sexo.value,
    idade: idade.value,
    cpf: cpf.value,
    endereco: {
      estado: estado.value,
      cidade: cidade.value,
      bairro: bairro.value,
      numero: numeroCasa.value,
      rua: rua.value,
      cep: cep.value,
    },
  };

  Api.cadastrarCliente(data);
};

const btnCadastrar = document.querySelector(".cadastrar");

btnCadastrar.addEventListener("click", registro);
