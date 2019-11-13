import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
import Api from '../services/Api';
import ExibirResultadoConsultaServices from "../services/ExibirResultadoConsultaServices";

export default class ExibirResutadoConsulta extends Component {

    constructor(props) {

        super(props);

        this.state = {

            //status de carregamento dos dados da API. Quando os dados forem carregados, seu valor muda para false.
            isLoading: true,

        };

    }

    static navigationOptions = {

        title: 'Identificação (Consulta)',
        headerTitleStyle: {
        },

        headerStyle:{
            backgroundColor: '#b1d9e7'
        },
        headerTintColor: 'black',
    };

    //Carrega dados da API ao renderizar a interface

    async componentDidMount() {

        //recebe o numero do bem informado pelo usuario
        let numeroPatrimonio = this.props.navigation.state.params.numeroBem;

        //instancia webservice para consulta
        let dadosBem = new ExibirResultadoConsultaServices();

        //realiza consulta por numero de patrimonio e devolve JSON
        this.setState({dataSource: await dadosBem.loadDadosBem(numeroPatrimonio)});

        //remove o spinner da tela apos carregamento
        this.setState({isLoading: false});

    }

    clicou =() =>{

        this.props.navigation.navigate('Consultas')
    };

    render () {

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }

        if (this.state.dataSource === 0) {
            return(

                <Text style={styles.bemNaoCadastrado}>
                    Este bem ainda não possui cadastro no sistema!
                </Text>

            );

        } else {


            return (
                <View style={styles.container}>

                    <ScrollView>

                        <Text
                            style={styles.tituloInformacaoTopo}>Subelemento:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].descricaoSubElemento}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Descrição do Bem:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].descricaoBem}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Classificação:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].nomeClassificacao}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Valor do Bem:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>R$ {this.state.dataSource[0].valorBem}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Número do Bem Anterior (P.A):
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].numeroAntigoBem}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Estado do Bem:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].nomeEstadoBem}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Responsável:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].nomeResponsavel} {this.state.dataSource[0].sobrenomeResponsavel}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Secretaria:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].descricaoSecretaria}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Origem:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].descricaoOrigem}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Destino:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].nomeDestino}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Subdestino:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].nomeSubDestino}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Empresa:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].nomeFantEmpresa}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Conta Contábil:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].descricaoContaContabil}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Tipo de Aquisição:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].descricaoTipoAquisicao}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Tipo de Incorporação:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].descricaoTipoIncorporacao}
                        </Text>


                        <Text
                            style={styles.tituloInformacao}>Observações:
                        </Text>

                        <Text
                            style={styles.conteudoInformacao}>{this.state.dataSource[0].observaçõesBem}
                        </Text>


                        <Text
                            style={styles.conteudoInformacao}>
                        </Text>

                    </ScrollView>

                </View>
            );

        }
    }
}

const styles = StyleSheet.create({

    container: {

        flex:1,
       // justifyContent:'space-between',
        backgroundColor:'#fff',
        margin: -10


    },

    tituloInformacaoTopo:{

        marginTop: 25,
        marginLeft: 30,
        fontSize: 18,

    },

    tituloInformacao:{

        marginTop: 30,
        marginLeft: 30,
        fontSize: 18,

    },

    conteudoInformacao:{

        marginTop: 0,
        marginLeft: 30,
        fontSize: 18,

    },

    bemNaoCadastrado:{

        textAlign:'center',
        marginTop: 230,
        height :80,
        fontSize: 20

    },
});

