import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Picker, AsyncStorage} from "react-native";

export default class SelecaoTipoBem extends Component {

    constructor(){
        super();

        this.state={
            PickerValue:''
        }
    };

    static navigationOptions = {

        title: 'Seleção de Tipo do Bem',
        headerTitleStyle: {

        },

        headerStyle:{
            backgroundColor: '#b1d9e7'
        },
        headerTintColor: 'black',

    };

    clicou =() =>{

        var data = this.state.PickerValue;

        /*if(data==""){
            alert("Nenhuma Opção Foi Selecionada");
        } else{

            this.props.navigation.navigate('CadastroBem')
            //alert(data);
        }*/

        this.props.navigation.navigate('CadastroBem')

    }

    displayData = async () => {
        try{
            var idRec = await AsyncStorage.getItem('idFundo');
            alert(JSON.parse(idRec));
        }

        catch(error){
            alert(error);
        }
    }

    render () {

        return(
            <View style={styles.content}>

                <Text style={styles.textoInstrucao1}>
                    Selecione o Tipo do Bem
                </Text>

                <Text style={styles.textoInstrucao2}>
                    para Cadastro
                </Text>


                <View style={styles.pickerBorder}>

                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={this.state.PickerValue}
                        onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                        borderColor

                    >

                        <Picker.Item label="Móveis" value="1 - Móveis"/>
                        <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                        <Picker.Item label="Veículos" value="3 - Veículos"/>

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

