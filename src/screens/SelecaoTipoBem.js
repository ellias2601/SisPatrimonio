import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";

export default class SelecaoTipoBem extends Component {

    static navigationOptions = {
        title: 'Seleção de Tipo do Bem',
        headerStyle:{
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }

    };

    render () {
        return(
            <View style={{flex:1, justifyContent: 'center', margin: 50}}>

                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 50}}>Seleção de Tipo do Bem</Text>
                </View>

                <View Style={{margin:20}}>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => {
                            //this.clicou()
                            this.props.navigation.navigate('CadastroBem')
                        }}
                    >
                        <Text style={styles.botaoText}>CONTINUAR</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );

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
        width:370,
        paddingTop:50,
        paddingBottom:50,
        paddingLeft:20,
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
