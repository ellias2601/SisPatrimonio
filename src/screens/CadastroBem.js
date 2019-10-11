import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, ScrollView, TextInput, Picker} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Panel from "../components/Panel";
import DatePicker from 'react-native-datepicker';

console.disableYellowBox = true;

export default class CadastroBem extends Component {

    constructor(props) {
        super(props);

        this.state = {date:"15-05-2018"}
    };

    static navigationOptions = {

        title: 'Cadastro de Bens',
        headerTitleStyle: {},
        headerStyle: {
            backgroundColor: '#b1d9e7'
        },
        headerTintColor: 'black',

    };

    render() {

        return (

            <ScrollView style={styles.container}>

                <View style={styles.viewData}>

                    <Text style={styles.textoDataCadastro}>
                        Selecione a data para cadastro:

                     </Text>

                    <DatePicker
                        style={{width: 200}}
                        date={this.state.date} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-01-2016"
                        maxDate="01-01-2019"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />



                </View>


                <Panel title="Identificação do Bem">

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue1}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue1:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o SubElemento" value="0"/>
                            <Picker.Item label="Móveis e Utensílios Domésticos" value="1"/>
                            <Picker.Item label="Mobiliário em Geral" value="3"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Descrição do Bem"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorderInput}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>


                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue2}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue2:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione a Classificação" value="0"/>
                            <Picker.Item label="Cadeira" value="1"/>
                            <Picker.Item label="Mesa" value="2"/>
                            <Picker.Item label="Otoscópio" value="3"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-create"} size={30} width={100}  color={"black"}/>

                        </View>

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Valor do Bem"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Novo Número do Bem"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-create"} size={30} width={100}  color={"black"}/>

                        </View>

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Número do Bem Anterior"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue3}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue3:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o Estado do Bem" value="0"/>
                            <Picker.Item label="Ótimo" value="1"/>
                            <Picker.Item label="Bom" value="2"/>
                            <Picker.Item label="Regular" value="3"/>
                            <Picker.Item label="Sucata" value="4"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Quantidade de Bens a Cadastrar"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                </View>

            </Panel>



                <Panel title="Dados do Responsável">

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue4}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue4:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o Responsável" value="0"/>
                            <Picker.Item label="José da Silva" value="1"/>
                            <Picker.Item label="Kaíque Matheus" value="2"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-create"} size={30} width={100}  color={"black"}/>

                        </View>

                    </View>
                </Panel>




                <Panel title="Localização do Bem">

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue5}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue5:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione a Origem" value="0"/>
                            <Picker.Item label="Almoxarifado 01" value="1"/>
                            <Picker.Item label="Depósito Municipal" value="2"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue6}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue6:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione a Secretaria" value="0"/>
                            <Picker.Item label="Secretaria Municipal de Educação" value="1"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue7}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue7:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o Destino" value="0"/>
                            <Picker.Item label="Escola Municipal José Caldas" value="1"/>
                            <Picker.Item label="Creche Vó Maria" value="2"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue8}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue8:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o SubDestino" value="0"/>
                            <Picker.Item label="Secretaria" value="1"/>
                            <Picker.Item label="Coordenação" value="2"/>
                            <Picker.Item label="Sala de Aula 01" value="3"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-create"} size={30} width={100}  color={"black"}/>

                        </View>
                    </View>

                </Panel>



                <Panel title="Dados Contábeis">

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue9}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue9:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione a Empresa" value="0"/>
                            <Picker.Item label="Fernando Alves Martins EPP" value="1"/>
                            <Picker.Item label="Papelaria Colegial LTDA" value="2"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue10}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue10:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione a Conta Contábil" value="0"/>
                            <Picker.Item label="Mobiliário em Geral (10.3456.234.22)" value="1"/>
                            <Picker.Item label="Móveis e Utensilios Domésticos (10.222.222.22)" value="2"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue11}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue11:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o Tipo de Aquisição" value="0"/>
                            <Picker.Item label="Comprado" value="1"/>
                            <Picker.Item label="Doado" value="2"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue12}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue12:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o Tipo de Incorporação" value="0"/>
                            <Picker.Item label="Transferência Recebida" value="1"/>
                            <Picker.Item label="Doação de Instituições Públicas" value="2"/>
                            <Picker.Item label="Compra Direta" value="3 - Veículos"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                </Panel>



                <Panel title="Dados do Veículo">
                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Número do Documento"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Modelo"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue13}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue13:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Tipo de Combustível" value="0"/>
                            <Picker.Item label="Gasolina" value="1"/>
                            <Picker.Item label="Álcool" value="2"/>
                            <Picker.Item label="Diesel" value="3"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Marca"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Ano"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Chassi"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Placa"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>
                </Panel>



                <Panel title="Observações">
                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Informe Possíveis Observações"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                </Panel>

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

        );
    }

}


var styles = StyleSheet.create({
    container: {

        paddingTop      : 30,
        flex            : 1,
        backgroundColor : '#fff',
    },

    viewData:{
        //justifyContent: 'center',
        //alignItems: 'center',
        paddingLeft: 95 // posicionamento do datepicker
    },

    textoDataCadastro:{
        marginTop: 0,
        height :30, // espacamento entre topo e grid
        fontSize: 15,

    },

    pickerBorder:{
        //flex:1,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row', //Alinhamento dos icones de status
        width: 300,  //Reduz ou aumenta borda do picker para direita
        paddingRight: 200
    },

    pickerStyle:{
        width: 290,
        height: 50,
        paddingTop: '10%',
        borderWidth: 1,
    },

    iconBorder:{

        marginTop: 8,
        marginLeft: 30
    },

    bordaInput:{

        marginTop: 20,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        width: 300, //Reduz ou aumentar borda do imput para a direita
        paddingRight: 200
    },

    input: {

        //marginLeft: 30,
        width: 290,
        height: 50,
        paddingTop: '10%',
        paddingLeft: 7, // Posicionamento dos placeholders nos inputs
        fontSize: 15,  //Tamanho da fonte do placeholder e conteudo
        // placeholderTextColor: "#000"

    },

    iconBorderInput:{

        marginTop: 8,
        marginLeft: 30
    },

    botaoView:{

        marginTop: '-4%', //altera altura do botao
        flex:1,
        //backgroundColor:'#fff',
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

//AppRegistry.registerComponent('Panels', () => Panels);
