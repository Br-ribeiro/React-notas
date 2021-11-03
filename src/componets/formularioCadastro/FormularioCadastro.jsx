import React,{ Component } from "react"


export class FormularioCadastro extends Component{

    constructor(){
        super();
        this.titulo = "";
    }

    handleMudancaTitulo(evento){    

        this.titulo = evento.target.value;
        console.log(this.titulo)

    }

    render(){
        return (
            <form className="form-cadastro">
                <input type="text" placeholder="Título" className="form-cadastro_input" onChange={this.handleMudancaTitulo.bind(this)} />
                <textarea className="form-cadastro_input" rows={15} placeholder="Excreva sua nota..."></textarea>
                <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
            </form>
        )
    }

}

export default FormularioCadastro
