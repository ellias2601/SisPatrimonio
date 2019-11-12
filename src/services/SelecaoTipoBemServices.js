import React, {Component} from 'react';
import Api from "./Api";
import {AsyncStorage} from "react-native";

export default class SelecaoTipoBemServices extends Component {

    // Carrega dados da API, conforme solicitação URL

    loadTiposBem = async () => {

        console.log('Carregando Tipos de Bem');
        const response = await Api.get('/tiposBem');

        //Apresenta no console o JSON obtido como resposta!
        console.log(response.data);

        return response.data;
    };


    //função responsável por armazenar o id do fundo selecionado na sessão do usuário
    //e prosseguir o processo de cadastro.

   static prosseguir =(state, props) =>{

        //recebe o id do fundo selecionado pelo usuário
        const tipoBem = state.idTipoBemSelecionado;

        //o usuario pode selecionar outro fundo voltando a tela, portanto:
        try {

            let value = AsyncStorage.getItem('idTipoBemSelecionado');

            //verifica se algum tipo de bem ja foi selecionado pelo usuário na atual sessão
            //se sim, remove o id da antiga seleção e insere o id respectivo ao novo tipo de bem escolhido, para posterior utilização
            //se não, insere o id do  tipo de bem selecionado para posterior utilização

            if (value != null) {
                AsyncStorage.removeItem('idTipoBemSelecionado'); }

            AsyncStorage.setItem('idTipoBemSelecionado',  JSON.stringify(tipoBem));

        } catch (error) {

            alert('Falha no processo de cadastro, entre em contato com o suporte técnico! ID: SELECTIPOBEM');
        }

        //this.displayData();

        //redireciona o usuário para a próxima tela
        props.navigation.navigate('CadastroBem')
    }

}
