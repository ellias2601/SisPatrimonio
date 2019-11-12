import React, {Component} from 'react';
import {Alert, Image, Text, TextInput, TouchableOpacity, View, StyleSheet, AsyncStorage} from "react-native";
import Api from "../services/Api";


export default class Login extends Component{

    constructor(props){

        super(props);

        this.state = {
            cpf: '',
            senha: '',
        }

    }

    clicou = async () => {

        console.log('Checando Dados Login');

        let url = '/login/' + this.state.cpf + '/' + this.state.senha;

        const responseDadosUsuario = await Api.get(url);

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseDadosUsuario.data);
        //console.log(responseDadosUsuario.data[0].nomeUsuario);


        if(responseDadosUsuario.data.length === 0 ) {
            alert('Dados Incorretos, Tente Novamente!');

        } else{

            //await AsyncStorage.setItem('dataSourceIDUsuario',  JSON.stringify(responseDadosUsuario.data[0].idUsuario));
            //await AsyncStorage.setItem('dataSourceNomeUsuario',  JSON.stringify(responseDadosUsuario.data[0].nomeUsuario));
            //let value = AsyncStorage.getItem('dataSourceIDUsuario');
            //alert (JSON.parse(value));

            this.props.navigation.navigate('MenuPrincipal')
        }

    };


    render() {
        return (

            <View style={styles.content}>

                <View style={styles.container}>

                    <Image
                        source={require('../assets/logo3.png')}
                        style={styles.logo}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="CPF"
                        onChangeText={(value) => this.setState({cpf:value})}
                        value={this.state.cpf}
                        autoCapitalize="none"
                    />

                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Digite sua senha"
                        onChangeText={(value) => this.setState({senha:value})}
                        value={this.state.senha}
                    />

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => {
                            this.clicou()

                        }}
                    >
                        <Text style={styles.botaoText}>ACESSAR</Text>
                    </TouchableOpacity>

                </View>

            </View>


        )
    }
}

const styles = StyleSheet.create({

    content:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#b1d9e7'
    },

    container: {
        //flex: 1,
        //flexDirection:'column',
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8cc6df',
        width:340,
        paddingTop:50,
        paddingBottom:50,
        paddingLeft:'7%',
        paddingRight: 20,
        borderRadius:10

    },

    logo: {
        width: 150,
        height: 150,
        paddingTop:50,
        // borderRadius: 100,
    },

    input: {
        padding: 10,
        marginTop: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    },

    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#b1d9e7',
        marginTop: 25,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },

    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#545454'
    }

});

