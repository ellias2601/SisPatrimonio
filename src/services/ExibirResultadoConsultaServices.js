import React, {Component} from 'react';
import Api from "./Api";
import {AsyncStorage} from "react-native";

export default class ExibirResultadoConsultaServices extends Component {


    // Carrega dados da API, conforme solicitação URL

    loadDadosBem = async (numeroPatrimonio) => {

        console.log('Carregando Dados do Bem Informado');

        let url = '/consultaPorNumeroPatrimonio/' + numeroPatrimonio;


        const response = await Api.get(url);

        //Apresenta no console o JSON obtido como resposta!
        console.log(response.data);

        return response.data;

    };
}
