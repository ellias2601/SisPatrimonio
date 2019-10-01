/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity} from 'react-native'

export default class App extends Component {

  clicou = () => {
    Alert.alert("Em desenvolvimento", "A ser implementado")
  };

  render() {
    return (

        <View style={styles.content}>

        <View style={styles.container}>

          <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
          />

          <TextInput
              style={styles.input}
              placeholder="Digite seu CPF"
          />

          <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Digite sua senha"
          />

          <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                this.clicou()
              }}
          >
            <Text style={styles.botaoText}>Login</Text>
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
    backgroundColor:'blue'
  },

  container: {
    //flex: 1,
    //flexDirection:'column',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3386ff',
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
    borderRadius: 100,
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
    backgroundColor: '#335eff',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }

});


