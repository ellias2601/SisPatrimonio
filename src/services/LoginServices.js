import React, {Component} from 'react';
import Api from "./Api";
import {Alert, AsyncStorage} from "react-native";
import Login from "../screens/Login";

export default class LoginServices extends Component {

    constructor(props){
        super(props);

    }

    static login = async (state, props) => {

        console.log('Checando Dados Login');

        let url = '/login/' +  "'" + state.cpf + "'"  + '/' +  "'" + state.senha + "'" ;

        //console.log(url);
        const responseDadosUsuario = await Api.get(url, {timeout:10})

            .catch(

                function (error) {
                    Alert.alert("Erro", "Erro na comunicação com a base de dados! Tente novamente ou contacte o suporte!");

        });

        //console.log(responseDadosUsuario.data);

        if(responseDadosUsuario.data.length === 0 ) {

            Alert.alert('Autenticação', 'Usuário ou Senha Incorreto(s)!');

        } else{

            try {

                //armazena o id do usuario para uso posterior na aplicacao
                await AsyncStorage.setItem('idUsuario', JSON.stringify(responseDadosUsuario.data[0].idUsuario));

                //repassa o nome do usuario logado para a tela de menu principal

                props.navigation.navigate('MenuPrincipal', {nomeUsuario: responseDadosUsuario.data[0].nomeUsuario,})
            }
            catch(error){
                Alert.alert('Erro', 'Falha no processo de login, entre em contato com o suporte técnico! ID: LOGUSER');
            }
        }

    };

}
