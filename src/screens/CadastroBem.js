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
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o SubElemento" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

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
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione a Classificação" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

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
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o Estado do Bem" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

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
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione o Responsável" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

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
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione a Origem" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

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

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

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

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

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

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-create"} size={30} width={100}  color={"black"}/>

                        </View>
                    </View>

                </Panel>



                <Panel title="Dados Contábeis">

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

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

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

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

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

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

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
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Tipo de Combustível" value="0"/>
                            <Picker.Item label="Móveis" value="1 - Móveis"/>
                            <Picker.Item label="Imóveis" value="2 - Imóveis"/>
                            <Picker.Item label="Veículos" value="3 - Veículos"/>

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
