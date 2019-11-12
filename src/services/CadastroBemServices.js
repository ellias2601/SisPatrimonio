import React, {Component} from 'react';
import Api from "./Api";
import {AsyncStorage} from "react-native";

export default class CadastroBemServices extends Component {

    loadIdFundoSelecionado = async () => {

        let idFundoJSON = await AsyncStorage.getItem('idFundo');
        var idFundoString = JSON.parse(idFundoJSON);


        console.log('ID Fundo Selecionado: ' + idFundoString);

        return idFundoString;
    };

    loadIdTipoBemSelecionado = async () => {

        let idTipoBemJSON = await AsyncStorage.getItem('idTipoBemSelecionado');
        var idTipoBemString = JSON.parse(idTipoBemJSON);


        console.log('ID Tipo Bem Selecionado: ' + idTipoBemString);

       return idTipoBemString;


    }

// Carrega dados da API, conforme solicitação URL

    loadSubElementos = async () => {

        console.log('Carregando SubElementos');
        const responseSubElementos = await Api.get('/subElementos');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseSubElementos.data);

        return responseSubElementos.data;
    };


    loadClassificacoes = async () => {

        console.log('Carregando Classificações');
        const responseClassificacoes = await Api.get('/classificacoes');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseClassificacoes.data);

        return responseClassificacoes.data;

    };

    loadEstadosBem = async () => {

        console.log('Carregando Estados Bem');
        const responseEstadosBem = await Api.get('/estadosBem');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseEstadosBem.data);

        return responseEstadosBem.data;

    };

    loadResponsaveis = async () => {

        console.log('Carregando Reponsaveis');
        const responseResponsaveis= await Api.get('/responsaveis');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseResponsaveis.data);

        return responseResponsaveis.data;

    };

    loadSecretariasPorFundo = async (state) => {

        console.log('Carregando Dados da Secretaria conforme Fundo');

        let url = '/secretariasPorFundo/' + state.dataSourceIDFundo;

        const responseSecretarias = await Api.get(url);

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseSecretarias.data);

        return responseSecretarias.data;

    };


    loadOrigensPorFundo = async (state) => {

        console.log('Carregando Dados da Origem conforme Fundo');

        let url = '/origensPorFundo/' + state.dataSourceIDFundo;

        const responseOrigens = await Api.get(url);

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseOrigens.data);

        return responseOrigens.data;

    };


    loadDestinosPorFundo = async (state) => {

        console.log('Carregando Dados do Destino conforme Fundo');

        let url = '/destinosPorFundo/' + state.dataSourceIDFundo;

        const responseDestinos = await Api.get(url);

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseDestinos.data);

        return responseDestinos.data;

    };

    loadSubDestinosPorFundo = async (state) => {

        console.log('Carregando Dados do SubDestino conforme Fundo');

        let url = '/subDestinosPorFundo/' + state.dataSourceIDFundo;

        const responseSubDestinos = await Api.get(url);

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseSubDestinos.data);

        return responseSubDestinos.data;

    };

    loadEmpresas = async () => {

        console.log('Carregando Empresas');
        const responseEmpresas= await Api.get('/empresas');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseEmpresas.data);

        return responseEmpresas.data;

    };

    loadContasContabeis = async () => {

        console.log('Carregando Contas Contabeis');
        const responseContasContabeis= await Api.get('/contascontabeis');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseContasContabeis.data);

        return responseContasContabeis.data;

    };

    loadTiposAquisicao = async () => {

        console.log('Carregando Tipos Aquisicao');
        const responseTiposAquisicao= await Api.get('/tiposaquisicao');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseTiposAquisicao.data);

        return responseTiposAquisicao.data;

    };

    loadTiposIncorporacao = async () => {

        console.log('Carregando Tipos Incorporacao');
        const responseTiposIncorporacao= await Api.get('/tiposincorporacao');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseTiposIncorporacao.data);

        return  responseTiposIncorporacao.data;

    };


    static concluir = async (state) => {

        console.log('Salvando No BD!');

        await Api.post('/salvarCadastro', {
            dataCadastroBem: state.date,
            descricaoBem: state.descricaoBem,
            valorBem: state.valorBem,
            numeroAtualBem: state.numeroAtualBem,
            numeroAntigoBem: state.numeroAntigoBem,
            observaçõesBem: state.observacoesBem,
            qtdACadastrarBem: state.qtdACadastrarBem,
            idUsuario: '1',
            idFundo: state.dataSourceIDFundo,
            idTipoBem: state.dataSourceIDTipoBem,
            idSubElemento: state.idSubElementoSelecionado,
            idClassificacao: state.idClassificacaoSelecionado,
            idEstadoBem: state.idEstadoBemSelecionado,
            idEmpresa: state.idEmpresaSelecionado,
            idResponsavel: state.idResponsavelSelecionado,
            idOrigem: state.idOrigemSelecionado,
            idDestino: state.idDestinoSelecionado,
            idSubDestino: state.idSubDestinoSelecionado,
            idContaContabil: state.idContaContabilSelecionado,
            idTipoAquisicao: state.idTipoAquisicaoSelecionado,
            idTipoIncorporacao: state.idTipoIncorporacaoSelecionado,
            idSecretaria: state.idSecretariaSelecionado,

        }).then(function (response) {

                console.log(response.data);

                if (response.status === 200) {

                    alert("Bem salvo com sucesso!");

                } else {
                    alert("Erro ao salvar bem! Tente novamente ou contacte o suporte!");
                }
            }
        ).catch(function (error) {
            alert('Erro na comunicação com a base de dados! Tente novamente ou contacte o suporte!');
        });
    }

}
