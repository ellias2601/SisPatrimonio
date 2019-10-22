import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";

export default class ExibirQrCode extends Component {

    static navigationOptions = {

        title: 'Emitir QR Code',
        headerTitleStyle: {
        },

        headerStyle:{
            backgroundColor: '#b1d9e7'
        },
        headerTintColor: 'black',
    };

    render () {
        return(
            <View style={styles.container}>

                <Text
                    style={styles.textoFeedback}>QR Code emitido com sucesso para os bens relativos ao subdestino selecionado!
                </Text>

                <Image
                    source={require('../assets/frame.png')}
                    style={styles.qrCode}
                />

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => {
                        //this.clicou()
                        this.props.navigation.goBack()
                    }}
                >
                    <Text style={styles.botaoText}>COMPARTILHAR</Text>
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

    textoFeedback:{

        marginTop: 5,
        height :60,
        fontSize: 18,
        textAlign: 'center'
    },

    qrCode: {

        width: 200,
        height: 250,
    },

    botao: {

        marginTop: 40,
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

