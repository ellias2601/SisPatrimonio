import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";

export default class MenuPrincipal extends Component {

    static navigationOptions = {

        title: 'Menu Principal',
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
                    style={styles.textoBemVindo}>Bem-vindo ao SisPatrimônio, Ellias!
                </Text>

                <Text
                    style={styles.textoInteracao}>O que deseja fazer hoje?
                </Text>

                <Image
                    source={require('../assets/menuPersona.jpg')}
                    style={styles.imagemMenu}
                />

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

    textoBemVindo:{

        marginTop: 5,
        height :60,
        fontSize: 20,

    },

    textoInteracao:{

        height :70,
        fontSize: 20,

    },

    imagemMenu: {
        width: 200,
        height: 250,

    },

});

