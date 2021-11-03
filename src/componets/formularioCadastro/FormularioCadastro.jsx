import React,{ Component } from "react"


export class FormularioCadastro extends Component{

    render(){
        return (
            <form className="form-cadastro">
                <input type="text" placeholder="Título" className="form-cadastro_input" />
                <textarea className="form-cadastro_input" rows={15} placeholder="Excreva sua nota..."></textarea>
                <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
            </form>
        )
    }

}

export default FormularioCadastro
