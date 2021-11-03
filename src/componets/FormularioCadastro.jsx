import React,{ Component } from "react"


export class FormularioCadastro extends Component{

    render(){
        return (
            <form>
                <input type="text" placeholder="Título" />
                <textarea placeholder="Excreva sua nota..."></textarea>
                <button>Criar nota</button>
            </form>
        )
    }

}

export default FormularioCadastro
