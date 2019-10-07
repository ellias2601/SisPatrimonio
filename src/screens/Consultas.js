import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, TextInput} from "react-native";

export default class Consultas extends Component {

    static navigationOptions = {

        title: 'Identificação (Consulta)',
        headerTitleStyle: {
        },

        headerStyle:{
            backgroundColor: '#b1d9e7'
        },
        headerTintColor: 'black',
    };

    clicou =() =>{

            this.props.navigation.navigate('ExibirResultadoConsulta')
    };

    render () {
        return(
            <View style={styles.container}>

                <Text
                    style={styles.textoNumeroBem}>Informe o número do bem para consulta
                </Text>

                <View style={styles.bordaInputNumeroBem}>

                <TextInput
                    style={styles.inputNumeroBem}
                    placeholder="CPF"
                />

                </View>

                <Text
                    style={styles.textoOpcao}>ou
                </Text>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => {
                        this.clicou()

                    }}
                >
                    <Text style={styles.botaoText}>Escaneie Código de Barras / QR Code</Text>
                </TouchableOpacity>

            </View>
        );

    }
}

const styles = StyleSheet.create({

    container: {

        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'

    },

    textoNumeroBem:{

        marginTop: 30,
        height :60,
        fontSize: 20,
        textAlign: 'center'
    },

    bordaInputNumeroBem:{

        marginTop: 20,
        borderWidth: 1,
        borderRadius: 8
    },

    inputNumeroBem: {

        width: 290,
        height: 50,
        paddingTop: '10%',

    },

    textoOpcao:{

        marginTop: 30,
        height :60,
        fontSize: 20,
        textAlign: 'center'
    },

    botao: {

        marginTop: 0,
        width: 180,
        height: 100,
        backgroundColor: '#b1d9e7',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },

    botaoText: {

        fontSize: 16,
        fontWeight: 'bold',
        color: '#545454',
        textAlign: 'center'
    }

});

