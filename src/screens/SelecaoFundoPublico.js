import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet,  Picker, ActivityIndicator, AsyncStorage } from "react-native";
import SelecaoFundoPublicoServices from "../services/SelecaoFundoPublicoServices";


//http://jsonplaceholder.typicode.com/users = API de Testes

export default class SelecaoFundoPublico extends Component {

    constructor(props){

        super(props);

        this.state={

            //status de carregamento dos dados da API. Quando os dados forem carregados, seu valor muda para false.
            isLoading: true,

            //inicializa o id dos fundos a serem preenchidos no picker.
            idFundoSelecionado: 1,
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

    //Carrega dados da API ao renderizar a interface

    async componentDidMount() {

        let dadosFundoPublico = new SelecaoFundoPublicoServices();

        this.setState({dataSource: await dadosFundoPublico.loadFundosPublicos()});
        this.setState({isLoading: false});

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
                    Selecione o Fundo Público
                </Text>

                <Text style={styles.textoInstrucao2}>
                    para Cadastro
                </Text>

                {/*
                    <Text>
                        {this.state.ruaEndereco}
                    </Text>
                 */
                }
                    <View style={styles.pickerBorder}>

                         <Picker

                            style={styles.pickerStyle}
                            selectedValue={this.state.idFundoSelecionado}
                            onValueChange={(itemValue, itemIndex) => this.setState({idFundoSelecionado:itemValue})}
                            borderColor
                         >
                             { this.state.dataSource.map((item, key)=>(
                                 <Picker.Item label={item.siglaFundo  + ' - ' + item.nomeFundo} value={item.idFundo} key={key} />)
                             )}


                         </Picker>

                    </View>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => {
                            SelecaoFundoPublicoServices.prosseguir(this.state, this.props);
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

