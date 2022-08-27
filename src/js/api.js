class Api {

    static async listarClientes() {

        const data = await fetch("https://atividade-api-clientes.herokuapp.com/clientes")
            .then(res => res.json())
            .catch(err => console.log(err))
            console.log(data)
        return data

    }

    static async cadastrarCliente(dataBase) {
        const data = await fetch("https://atividade-api-clientes.herokuapp.com/clientes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataBase)           
            })
            .then(res => res.json())
            .catch(err => console.log(err))
        return data
    }

    static async editarCliente(id, dataBase) {
        const data = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`, {
                method: "PATCH",
                body: JSON.stringify(dataBase),
                headers: {
                    "Content-Type": "application/json;charset = UTF-8"
                    
                    
                }
            })
            .then(res => res.json())
            .catch(err => console.log(err))
        return data
    }

    static async deletarCliente(id) {
        await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`, {
            method: "DELETE"
        })
    }

}

export {
    Api
}