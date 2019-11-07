import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Picker, AsyncStorage, ActivityIndicator} from "react-native";
import Api from "../services/Api";

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

    componentDidMount() {

        this.loadItens();
    }

    // Carrega dados da API, conforme solicitação URL

    loadItens = async () => {

        console.log('Carregando Tipos de Bem');
        const response = await Api.get('/tiposBem');

        //Apresenta no console o JSON obtido como resposta!
        console.log(response.data);

        this.setState({
            isLoading: false,
            dataSource: response.data
        }, function() {
            // Callback
        });

    };

    //função responsável por armazenar o id do fundo selecionado na sessão do usuário
    //e prosseguir o processo de cadastro.

    prosseguir =() =>{

        //recebe o id do fundo selecionado pelo usuário
        const tipoBem = this.state.idTipoBemSelecionado;

        //o usuario pode selecionar outro fundo voltando a tela, portanto:
        try {

            let value = AsyncStorage.getItem('idTipoBemSelecionado');

            //verifica se algum tipo de bem ja foi selecionado pelo usuário na atual sessão
            //se sim, remove o id da antiga seleção e insere o id respectivo ao novo tipo de bem escolhido, para posterior utilização
            //se não, insere o id do  tipo de bem selecionado para posterior utilização

            if (value != null) {
                AsyncStorage.removeItem('idTipoBemSelecionado'); }

            AsyncStorage.setItem('idTipoBemSelecionado',  JSON.stringify(tipoBem));

        } catch (error) {

            alert('Falha no processo de cadastro, entre em contato com o suporte técnico! ID: SELECTIPOBEM');
        }

        //this.displayData();

        //redireciona o usuário para a próxima tela
        this.props.navigation.navigate('CadastroBem')
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
                        this.prosseguir()
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

