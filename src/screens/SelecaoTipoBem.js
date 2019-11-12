import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Picker, AsyncStorage, ActivityIndicator} from "react-native";
import SelecaoTipoBemServices from "../services/SelecaoTipoBemServices";

export default class SelecaoTipoBem extends Component {

    constructor(props){
        super(props);

        this.state={

            //status de carregamento dos dados da API. Quando os dados forem carregados, seu valor muda para false.
            isLoading: true,

            //inicializa o id dos tipos de bem a serem preenchidos no picker.
            idTipoBemSelecionado: 1,

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

    //Carrega dados da API ao renderizar a interface

   async componentDidMount() {

        let dadosTipoBem = new SelecaoTipoBemServices();

        this.setState({dataSource: await dadosTipoBem.loadTiposBem()});
        this.setState({isLoading: false});
    }


    displayData = async () => {
        try{

            var idFun = await AsyncStorage.getItem('idFundo');
            var idTipBem = await AsyncStorage.getItem('idTipoBemSelecionado');

            alert('ID Fundo: ' + JSON.parse(idFun));
            alert('ID Tipo Bem: ' + JSON.parse(idTipBem));

        }
        catch(error){
            alert(error);
        }
    }

    render () {

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

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
                        selectedValue={this.state.idTipoBemSelecionado}
                        onValueChange={(itemValue, itemIndex) => this.setState({idTipoBemSelecionado:itemValue})}
                        borderColor

                    >

                        { this.state.dataSource.map((item, key)=>(
                            <Picker.Item label={item.nomeTipoBem} value={item.idTipoBem} key={key} />)
                        )}

                    </Picker>

                </View>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => {
                        SelecaoTipoBemServices.prosseguir(this.state, this.props)
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

