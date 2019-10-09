import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, ScrollView, TextInput, Picker} from "react-native";

export default class CadastroBem extends Component {

    constructor(){
        super();

        this.state={
            PickerValue:''
        }
    };

    static navigationOptions = {
        title: 'Cadastro de Bens',
        headerStyle:{
            backgroundColor: '#b1d9e7'
        },
        headerTintColor: 'black',
    };

    render () {
        return(
            <View style={styles.container}>

                <ScrollView>

                    <View style={styles.bordaSessao1}>

                    <Text
                        style={styles.identificadorSessao1}>Identificação do Bem
                    </Text>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o SubElemento" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

                        </Picker>

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Descrição do Bem"
                            placeholderTextColor="#000"
                        />

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione a Classificação" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

                        </Picker>

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Valor do Bem"
                            placeholderTextColor="#000"
                        />

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Novo Número do Bem"
                            placeholderTextColor="#000"
                        />

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Número do Bem Anterior"
                            placeholderTextColor="#000"
                        />

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o Estado do Bem" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

                        </Picker>

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Quantidade de Bens a Cadastrar"
                            placeholderTextColor="#000"
                        />

                    </View>
                    </View>



                    <Text
                        style={styles.identificadorSessao2}>Dados do Responsável
                    </Text>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o Responsável" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

                        </Picker>

                    </View>




                    <Text
                        style={styles.identificadorSessao2}>Localização do Bem
                    </Text>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione a Origem" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

                        </Picker>

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione a Secretaria" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

                        </Picker>

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o Destino" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

                        </Picker>

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o SubDestino" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

                        </Picker>

                    </View>





                    <Text
                        style={styles.identificadorSessao2}>Dados Contábeis
                    </Text>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione a Empresa" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

                        </Picker>

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione a Conta Contábil" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

                        </Picker>

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o Tipo de Aquisição" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

                        </Picker>

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o Tipo de Incorporação" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

                        </Picker>

                    </View>





                    <Text
                        style={styles.identificadorSessao2}>Dados do Veículo
                    </Text>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Número do Documento"
                            placeholderTextColor="#000"
                        />

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Modelo"
                            placeholderTextColor="#000"
                        />

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Tipo de Combustível" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

                        </Picker>

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Marca"
                            placeholderTextColor="#000"
                        />

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Ano"
                            placeholderTextColor="#000"
                        />

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Chassi"
                            placeholderTextColor="#000"
                        />

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Placa"
                            placeholderTextColor="#000"
                        />

                    </View>




                    <Text
                        style={styles.identificadorSessao2}>Observações
                    </Text>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Informe Possíveis Observações"
                            placeholderTextColor="#000"
                        />

                    </View>

                    <View style={styles.botaoView}>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => {
                            //this.clicou()
                            this.props.navigation.navigate('SelecaoFundoPublico')
                        }}
                    >
                        <Text style={styles.botaoText}>CONCLUIR</Text>
                    </TouchableOpacity>

                    </View>

                </ScrollView>

            </View>
        );

    }
}

const styles = StyleSheet.create({

    container: {
        marginTop: '0%',
        flex:1,
        backgroundColor:'#fff',
        padding: 30,
        marginRight: 50 //Expande e reduz para a esquerda o container
        //marginRight: 0
    },

    bordaSessao1:{

        /*flex:1,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 8,

        paddingTop:50,
        paddingBottom:50,
        paddingLeft:20,
        paddingRight: 20,
        */

    },

    identificadorSessao1:{

        fontSize:20,
        //textAlign: 'center'
    },

    identificadorSessao2:{

        marginTop: 30,
        fontSize:20
    },

    pickerBorder:{
        //flex:1,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 8
    },

    pickerStyle:{

        width: 290,
        height: 50,
        paddingTop: '10%',
        borderWidth: 1,
    },

    bordaInput:{

        marginTop: 30,
        borderWidth: 1,
        borderRadius: 8
    },

    input: {

        //marginLeft: 30,
        width: 234,
        height: 50,
        paddingTop: '5%',
        paddingLeft: 7, // Posicionamento dos placeholders nos inputs
        fontSize: 15,  //Tamanho da fonte do placeholder e conteudo
       // placeholderTextColor: "#000"

    },

    botaoView:{

        marginTop: '0%',
        flex:1,
        backgroundColor:'#fff',
        padding: 30,
        alignItems: 'center'


    },

    botao: {
        width: 150,
        height: 45,
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
