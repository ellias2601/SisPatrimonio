import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Picker} from "react-native";
import Api from '../services/Api';

//http://jsonplaceholder.typicode.com/users = API de Testes

export default class SelecaoFundoPublico extends Component {

    constructor(){
        super();

        this.state={
            PickerValue:''
        }
    };

    static navigationOptions = {

        title: 'Seleção de Fundo Público',
        headerTitleStyle: {

        },

        headerStyle:{
            backgroundColor: '#b1d9e7'
        },
        headerTintColor: 'black',

    };

    clicou =() =>{
        /*var data = this.state.PickerValue;

            if(data==""){
                alert("Nenhuma Opção Foi Selecionada");
            } else{

                this.props.navigation.navigate('SelecaoTipoBem')
                //alert(data);
            }*/

        this.props.navigation.navigate('SelecaoTipoBem')
    }


    //Inicialização de estados. Funciona como uma sessão, dados podem ser armazenados e recuperados
    //em tempo de execução.

    state = {

        ruaEndereco: ' ',
    }

    //Carrega dados da API ao renderizar a interface

    componentDidMount() {

        this.loadItens();
    }

    // Carrega dados da API, conforme solicitação URL

    loadItens = async () => {

        console.log('Carregando Usuários');
        const response = await Api.get('/users');

        //Apresenta no console o JSON obtido como resposta!
        console.log(response.data);

        //Apresenta no console a rua do usuário na posição 0 (teste coleta dados JSON)
        console.log(response.data[0].address.street);

        //Armazena no state para posterior uso a rua do usuário capturada via API
        this.setState( { ruaEndereco: response.data[1].address.street})

        //Como apresentar a variavel ruaEndereco?
        // {this.state.ruaEndereco}

        //Armazena na variável data todos os dados carregados via API
        //const { data } : response.data;

    };


    render () {

        return(
            <View style={styles.content}>

                <Text style={styles.textoInstrucao1}>
                    Selecione o Fundo Público
                </Text>

                <Text style={styles.textoInstrucao2}>
                    para Cadastro
                </Text>

                {/*
                    <Text>
                        {this.state.ruaEndereco}
                    </Text>
                 */
                }
                    <View style={styles.pickerBorder}>

                         <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                         >
                            <Picker.Item label="FMS - Fundo Municipal de Saúde" value="1 - FMS"/>
                            <Picker.Item label="FME - Fundo Municipal de Educação" value="2 - FME"/>
                            <Picker.Item label="FMAS - Fundo Municipal de Assistência Social" value="3 - FMAS"/>

                        </Picker>

                    </View>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => {
                            this.clicou()
                        }}
                    >
                        <Text style={styles.botaoText}>PROSSEGUIR</Text>
                    </TouchableOpacity>

                </View>

        );

    }
}

const styles = StyleSheet.create({

    content:{

        marginTop: '0%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',

    },

    textoInstrucao1:{
        marginTop: 0,
        height :80,
        fontSize: 23,
    },

    textoInstrucao2:{
        marginTop: -50,
        height :80,
        fontSize: 23,
    },

    pickerBorder:{
        //flex:1,
        borderWidth: 1,
        borderRadius: 8
    },

    pickerStyle:{
        width: 290,
        height: 50,
        paddingTop: '10%',
        borderWidth: 1,
    },

    botao: {

        marginTop: 50,
        width: 150,
        height: 50,
        backgroundColor: '#b1d9e7',
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

