import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, TextInput} from "react-native";

export default class Consultas extends Component {

    constructor(props) {

        super(props);

        this.state = {
            numeroBem: '',
        };

    }

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

            this.props.navigation.navigate('ExibirResultadoConsulta', {numeroBem: this.state.numeroBem,})
    };

    render () {
        return(
            <View style={styles.container}>

                <Text
                    style={styles.textoNumeroBem1}>Informe o número do bem
                </Text>

                <Text
                    style={styles.textoNumeroBem2}>para consulta
                </Text>

                <View style={styles.bordaInputNumeroBem}>

                <TextInput

                    value={this.state.numeroBem}
                    onChangeText={numeroBem => this.setState({ numeroBem })}
                    style={styles.inputNumeroBem}
                    onEndEditing={() => {this.clicou()}}

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

        marginTop: '-10%', //ajusta altura do conteudo da tela
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'#fff'

    },

    textoNumeroBem1:{

        marginTop: 20,
        height :80,
        fontSize: 23,
        //textAlign: 'center'
    },

    textoNumeroBem2:{

        marginTop: -50,
        height :80,
        fontSize: 23,
        //textAlign: 'center'
    },

    bordaInputNumeroBem:{

        marginTop: -20,
        borderWidth: 1,
        borderRadius: 8
    },

    inputNumeroBem: {

        width: 260, //tamanho da borda do input
        height: 50,
        fontSize: 22,
        paddingLeft: 7,
        textAlign: 'center'

    },

    textoOpcao:{

        marginTop: 20,
        height :80,
        fontSize: 23,
        textAlign: 'center'
    },

    botao: {

        marginTop: -20,
        width: 180,
        height: 100,
        backgroundColor: '#b1d9e7',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },

    botaoText: {

        fontSize: 18,
        fontWeight: 'bold',
        color: '#545454',
        textAlign: 'center'
    }

});

