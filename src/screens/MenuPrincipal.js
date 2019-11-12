import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, AsyncStorage} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class MenuPrincipal extends Component {

    static navigationOptions = ({navigation}) => ({

        title: 'Menu Principal',
        headerTitleStyle: {

        },

        headerStyle:{
            backgroundColor: '#b1d9e7'
        },

        headerTintColor: 'black',

         headerRight: (
            <TouchableOpacity
                //title={logout}
                onPress={navigation.getParam('logout')}
                style={{margin:18}}
            >
                <Ionicons name={"md-power"} size={30} width={100} height={100} color={"black"}/>

            </TouchableOpacity>
        ),
    });

     desconectar = async () => {

         //Limpa os dados armazenados em AsyncStorage ao realizar Logout
         await AsyncStorage.clear();

         //Retorna a tela de login
         this.props.navigation.navigate('Login')

    };

    componentDidMount () {
        this.props.navigation.setParams({ logout: this.desconectar });
    }


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

    botao: {

        marginTop: 40,
        width: 150,
        height: 45,
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

