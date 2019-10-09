import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Picker} from "react-native";

export default class Emissões extends Component {

    constructor(){
        super();

        this.state={
            PickerValue1:'',
            PickerValue2:'',
            PickerValue3: ''
        }
    };

    static navigationOptions = {

        title: 'Emitir QR Code',
        headerTitleStyle: {

        },
        headerStyle:{
            backgroundColor: '#b1d9e7'
        },
        headerTintColor: 'black',

    };

    clicou =() =>{

        var data1 = this.state.PickerValue1;
        var data2 = this.state.PickerValue2;
        var data3 = this.state.PickerValue3;


        if(data1===""){
            alert("Fundo Público Não Selecionado");
        }
            else if(data2===""){
                alert("Destino Não Selecionado");
        }
                else if(data3===""){
                    alert("SubDestino Não Selecionado")
        }
        else{

            this.props.navigation.navigate('ExibirQRCode')
            //alert(data1);
            //alert(data2);
            //alert(data3);
        }
    };


    render () {

        return(
            <View style={styles.content}>

                <Text style={styles.textoInstrucao1}>
                    Informe os dados para a emissão
                </Text>

                <Text style={styles.textoInstrucao2}>
                    do QR Code Patrimonial
                </Text>

                <View style={styles.pickerBorderFundo}>

                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={this.state.PickerValue1}
                        onValueChange={(itemValue, itemIndex) => this.setState({PickerValue1:itemValue})}
                    >

                        <Picker.Item label="Selecione o Fundo Público" value="0 - Title"/>
                        <Picker.Item label="01 - FME - Fundo Municipal de Educação" value="1 - FME"/>

                    </Picker>

                </View>

                <View style={styles.pickerBorderDestino}>
                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={this.state.PickerValue2}
                        onValueChange={(itemValue, itemIndex) => this.setState({PickerValue2:itemValue})}
                        borderColor

                    >
                        <Picker.Item label="Selecione o Destino" value="0 - Title"/>
                        <Picker.Item label="22 - Escola Municipal José Caldas" value="22 - Escola José"/>


                    </Picker>

                </View>

                <View style={styles.pickerBorderSubDestino}>
                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={this.state.PickerValue3}
                        onValueChange={(itemValue, itemIndex) => this.setState({PickerValue3:itemValue})}
                        borderColor

                    >
                        <Picker.Item label="Selecione o SubDestino" value="0 - Title"/>
                        <Picker.Item label="12 - Coordenação" value="12 - Coordenação"/>

                    </Picker>

                </View>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => {
                        this.clicou()
                    }}
                >
                    <Text style={styles.botaoText}>CONTINUAR</Text>
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

    textoInstrucao1:{
        marginTop: 20,
        height :80,
        fontSize: 23,
    },

    textoInstrucao2:{
        marginTop: -50,
        height :80,
        fontSize: 23,
    },

    pickerBorderFundo:{
        //flex:1,
        borderWidth: 1,
        borderRadius: 8
    },

    pickerBorderDestino:{
        //flex:1,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 8
    },

    pickerBorderSubDestino:{
        //flex:1,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 8
    },

    pickerStyle:{
        width: 290,
        height: 50,
        paddingTop: '10%', //Altera tamanho do picker!!
        borderWidth: 1,
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

