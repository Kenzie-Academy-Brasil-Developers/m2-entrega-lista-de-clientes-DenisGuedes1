import { Api } from "../js/api.js";

const customers = await Api.listarClientes()
const selector = document.querySelector(".select") 


const dados = () => {
      
    customers.forEach( (customer) => {       
        const option = document.createElement("option")
       option.innerText = customer.nome
       option.value = customer.id
        selector.append(option)
    });
}
dados();


const pesquisa = document.querySelector(".pesquisa")

const pesquisar = (e) => {
    
    e.preventDefault()  

    const name = document.getElementById("0")
    const email = document.getElementById("1")
    const idade = document.getElementById("2")
    const cpf = document.getElementById("3")
    const sexo = document.getElementById("4")
    const cep = document.getElementById("5")
    const rua = document.getElementById("6")
    const numero = document.getElementById("7")
    const bairro = document.getElementById("8")
    const cidade = document.getElementById("9")
    const estado = document.getElementById("10")
    
    const id = selector.value 

    const customer = customers.find((customer) => id == customer.id)

    name.value =  customer.nome
    email.value = customer.email
    sexo.value = customer.sexo
    idade.value = customer.idade
    cpf.value = customer.cpf
    estado.value = customer.endereco.estado
    cidade.value = customer.endereco.cidade
    bairro.value = customer.endereco.bairro
    numero.value = customer.endereco.numero
    rua.value = customer.endereco.rua
    cep.value = customer.endereco.cep
}

const atualizar = document.querySelector(".atualizar")

const atualiza = (e) => {
    

    const name = document.getElementById("0")
    const email = document.getElementById("1")
    const idade = document.getElementById("2")
    const cpf = document.getElementById("3")
    const sexo = document.getElementById("4")
    const cep = document.getElementById("5")
    const rua = document.getElementById("6")
    const numero = document.getElementById("7")
    const bairro = document.getElementById("8")
    const cidade= document.getElementById("9")
    const estado= document.getElementById("10")
    
    const id = selector.value 

    const data = {
        "nome": name.value,
        "email": email.value,
        "sexo": sexo.value,
        "idade": idade.value,
        "cpf": cpf.value,
        "endereco": {
            "estado": estado.value,
            "cidade": cidade.value,
            "bairro": bairro.value,
            "numero": numero.value,
            "rua": rua.value,
            "cep": cep.value
        }
    }    
    Api.editarCliente(id,(data)) 
}

pesquisa.addEventListener("click", pesquisar)

atualizar.addEventListener("click",atualiza)

