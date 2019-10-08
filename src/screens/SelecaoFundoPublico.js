import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Picker} from "react-native";

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
        var data = this.state.PickerValue;

            if(data==""){
                alert("Nenhuma Opção Foi Selecionada");
            } else{

                this.props.navigation.navigate('SelecaoTipoBem')
                //alert(data);
            }
    }


    render () {

        return(
            <View style={styles.content}>

                <Text style={styles.textoInstrucao}>
                    Selecione o Fundo Público para Cadastro
                </Text>

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

        marginTop: '-10%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',

    },

    textoInstrucao:{
        marginTop: 0,
        height :100,
        fontSize: 20,
    },

    pickerBorder:{
        //flex:1,
        borderWidth: 1,
        borderRadius: 8
    },

    pickerStyle:{
        width: 290,
        height: 50,
        paddingTop: '15%',
        borderWidth: 1,
    },

    botao: {

        marginTop: 50,
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

