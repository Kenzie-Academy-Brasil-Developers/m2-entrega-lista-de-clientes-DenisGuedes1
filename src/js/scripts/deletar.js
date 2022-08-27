import { Api } from "../api.js";

const customers = await Api.listarClientes();
const selector = document.querySelector(".select");

const dados1 = () => {
  customers.forEach((customer) => {
    const Option = document.createElement("option");
   Option.innerText = customer.nome;
   Option.value = customer.id;
    selector.append(Option);
  });
};

dados1();


  
 
  



const btnDelete = document.querySelector(".delete");


btnDelete.addEventListener("click", (e) => {
  
  const id = selector.value;
  const newArra =customers.filter((id)=>id.id !==0)
 
  console.log("nao estou removendo")
  Api.deletarCliente(id);
});
