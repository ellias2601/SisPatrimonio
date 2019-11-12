import React, {Component} from 'react';
import Api from "./Api";
import {AsyncStorage} from "react-native";

export default class SelecaoFundoPublicoServices extends Component {

    // Carrega dados da API, conforme solicitação URL

    loadFundosPublicos = async () => {

        console.log('Carregando Fundos');
        const response = await Api.get('/fundos');

        //Apresenta no console o JSON obtido como resposta!
        console.log(response.data);

        return response.data;

    };

    //função responsável por armazenar o id do fundo selecionado na sessão do usuário
    //e prosseguir o processo de cadastro.

    static prosseguir =(state, props) =>{

        //recebe o id do fundo selecionado pelo usuário
        const idRec = state.idFundoSelecionado;

        //o usuario pode selecionar outro fundo voltando a tela, portanto:
        try {

            let value = AsyncStorage.getItem('idFundo');

            //verifica se algum fundo ja foi selecionado pelo usuário na atual sessão
            //se sim, remove o id da antiga seleção e insere o id respectivo ao novo fundo escolhido, para posterior utilização
            //se não, insere o id do fundo selecionado para posterior utilização

            if (value != null) {
                AsyncStorage.removeItem('idFundo'); }

            AsyncStorage.setItem('idFundo',  JSON.stringify(idRec));

        } catch (error) {

            alert('Falha no processo de cadastro, entre em contato com o suporte técnico! ID: SELECFUNDOS');
        }

        //this.displayData();

        //redireciona o usuário para a próxima tela
        props.navigation.navigate('SelecaoTipoBem')
    }

}
