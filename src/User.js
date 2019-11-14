import React from 'react';

export default class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: "Bem vindo ao React"
        };
    }
    /*definirMensagem(){
        this.setState({
            message: "Bem-vindo ao React",
        });
    }*/

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}