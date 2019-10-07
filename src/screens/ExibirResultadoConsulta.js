import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from "react-native";

export default class ExibirResutadoConsulta extends Component {

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

        this.props.navigation.navigate('Consultas')
    };

    render () {
        return(
            <View style={styles.container}>

                <ScrollView>

                <Text
                    style={styles.textoSubElemento}>SubElemento:
                </Text>

                <Text
                    style={styles.dadosSubElemento}>22 - Móveis e Utensílios Domésticos
                </Text>

                <Text
                    style={styles.textoDescricaoBem}>Descrição do Bem:
                </Text>

                <Text
                    style={styles.dadosDescricaoBem}>Mesa Oval para Reunião
                </Text>

                <Text
                    style={styles.textoClassificacaoBem}>Classificação:
                </Text>

                <Text
                    style={styles.dadosClassificacaoBem}>Mesa
                </Text>

                <Text
                    style={styles.textoValorDoBem}>Valor do Bem:
                </Text>

                <Text
                    style={styles.dadosValorDoBem}>R$ 2000.00
                </Text>

                <Text
                    style={styles.textoNumeroBem}>Número do Bem:
                </Text>

                <Text
                    style={styles.dadosNumeroBem}>022324
                </Text>

                <Text
                    style={styles.textoNumeroBemAnterior}>Número do Bem Anterior:
                </Text>

                <Text
                    style={styles.dadosNumeroBemAnterior}>012234
                </Text>

                <Text
                    style={styles.textoEstadoBem}>Estado do Bem:
                </Text>

                <Text
                    style={styles.dadosEstadoBem}>1 - Ótimo
                </Text>

                <Text
                    style={styles.textoResponsavelBem}>Responsável:
                </Text>

                <Text
                    style={styles.dadosResponsavelBem}>22 - José da Silva
                </Text>

                </ScrollView>

            </View>
        );

    }
}

const styles = StyleSheet.create({

    container: {

        flex:1,
       // justifyContent:'space-between',
        backgroundColor:'#fff'

    },

    textoSubElemento:{

        marginTop: 25,
        marginLeft: 30,
        fontSize: 18,

    },

    dadosSubElemento:{

        marginTop: 0,
        marginLeft: 30,
        fontSize: 18,

    },

    textoDescricaoBem:{

        marginTop: 30,
        marginLeft: 30,
        fontSize: 18,

    },

    dadosDescricaoBem:{

        marginTop: 0,
        marginLeft: 30,
        fontSize: 18,

    },

    textoClassificacaoBem:{

        marginTop: 30,
        marginLeft: 30,
        fontSize: 18,

    },

    dadosClassificacaoBem:{

        marginTop: 0,
        marginLeft: 30,
        fontSize: 18,

    },

    textoValorDoBem:{

        marginTop: 30,
        marginLeft: 30,
        fontSize: 18,

    },

    dadosValorDoBem:{

        marginTop: 0,
        marginLeft: 30,
        fontSize: 18,

    },

    textoNumeroBem:{

        marginTop: 30,
        marginLeft: 30,
        fontSize: 18,

    },

    dadosNumeroBem:{

        marginTop: 0,
        marginLeft: 30,
        fontSize: 18,

    },

    textoNumeroBemAnterior:{

        marginTop: 30,
        marginLeft: 30,
        fontSize: 18,

    },

    dadosNumeroBemAnterior:{

        marginTop: 0,
        marginLeft: 30,
        fontSize: 18,

    },

    textoEstadoBem:{

        marginTop: 30,
        marginLeft: 30,
        fontSize: 18,

    },

    dadosEstadoBem:{

        marginTop: 0,
        marginLeft: 30,
        fontSize: 18,

    },

    textoResponsavelBem:{

        marginTop: 30,
        marginLeft: 30,
        fontSize: 18,

    },

    dadosResponsavelBem:{

        marginTop: 0,
        marginLeft: 30,
        fontSize: 18,

    },

});

