import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, ScrollView, TextInput, Picker, ActivityIndicator, AsyncStorage} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Panel from "../components/Panel";
import DatePicker from 'react-native-datepicker';
import Api from '../services/Api';

console.disableYellowBox = true;

export default class CadastroBem extends Component {

    constructor(props) {

        super(props);

        this.state = {

            date:"2018-05-05",

            //status de carregamento dos dados da API. Quando os dados forem carregados, seu valor muda para false.
            isLoading: true,

            //inicializa o id dos fundos a serem preenchidos no picker.
            idSubElementoSelecionado: '',
            idClassificacaoSelecionado: '',
            idEstadoBemSelecionado:'',
            idResponsavelSelecionado:'',
            idSecretariaSelecionado: '',
            idOrigemSelecionado: '',
            idDestinoSelecionado:'',
            idSubDestinoSelecionado:'',
            idEmpresaSelecionado:'',
            idContaContabilSelecionado:'',
            idTipoAquisicaoSelecionado:'',
            idTipoIncorporacaoSelecionado:'',

            //inicializa inputs
            descricaoBem: '',
            valorBem: '',
            numeroAtualBem: '',
            numeroAntigoBem: '',
            qtdACadastrarBem: '',
            observacoesBem: '',

        }
    };

    static navigationOptions = {

        title: 'Cadastro de Bens',

        headerTitleStyle: {

        },

        headerStyle: {
            backgroundColor: '#b1d9e7'
        },

        headerTintColor: 'black',

    };

    //Carrega dados da API ao renderizar a interface

    async componentDidMount() {

        await this.loadIdFundoSelecionado();
        await this.loadIdTipoBemSelecionado();

        await this.loadSubElementos();
        await this.loadClassificacoes();
        await this.loadEstadosBem();
        await this.loadResponsaveis();
        await this.loadSecretariasPorFundo();
        await this.loadOrigensPorFundo();
        await this.loadDestinosPorFundo();
        await this.loadSubDestinosPorFundo();
        await this.loadEmpresas();
        await this.loadContasContabeis();
        await this.loadTiposAquisicao();
        await this.loadTiposIncorporacao();

    }

    loadIdFundoSelecionado = async () => {

        let idFundoJSON = await AsyncStorage.getItem('idFundo');
        var idFundoString = JSON.parse(idFundoJSON);


        //console.log('ID Fundo Selecionado: ' + idFundoString);

        this.setState({
            dataSourceIDFundo: idFundoString,

        }, function() {
            // Callback
            //console.log('ID Fundo Selecionado: ' + this.state.dataSourceIDFundo)
        });


    }

    loadIdTipoBemSelecionado = async () => {

        let idTipoBemJSON = await AsyncStorage.getItem('idTipoBemSelecionado');
        var idTipoBemString = JSON.parse(idTipoBemJSON);


        //console.log('ID Fundo Selecionado: ' + idFundoString);

        this.setState({
            dataSourceIDTipoBem: idTipoBemString,

        }, function() {
            // Callback
            //console.log('ID Fundo Selecionado: ' + this.state.dataSourceIDFundo)
        });


    }

    // Carrega dados da API, conforme solicitação URL

    loadSubElementos = async () => {

        console.log('Carregando SubElementos');
        const responseSubElementos = await Api.get('/subElementos');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseSubElementos.data);

        this.setState({
            dataSourceSubElementos: responseSubElementos.data,

        }, function() {
            // Callback
        });

    };

    loadClassificacoes = async () => {

        console.log('Carregando Classificações');
        const responseClassificacoes = await Api.get('/classificacoes');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseClassificacoes.data);

        this.setState({

            dataSourceClassificacoes: responseClassificacoes.data,

        }, function() {
            // Callback
        });

    };

    loadEstadosBem = async () => {

        console.log('Carregando Estados Bem');
        const responseEstadosBem = await Api.get('/estadosBem');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseEstadosBem.data);

        this.setState({

            dataSourceEstadosBem: responseEstadosBem.data,


        }, function() {
            // Callback
        });

    };

    loadResponsaveis = async () => {

        console.log('Carregando Reponsaveis');
        const responseResponsaveis= await Api.get('/responsaveis');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseResponsaveis.data);

        this.setState({
            dataSourceResponsaveis: responseResponsaveis.data,



        }, function() {
            // Callback
        });

    };

    loadSecretariasPorFundo = async () => {

        console.log('Carregando Dados da Secretaria conforme Fundo');

        let url = '/secretariasPorFundo/' + this.state.dataSourceIDFundo;

        const responseSecretarias = await Api.get(url);

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseSecretarias.data);

        this.setState({

            dataSourceSecretarias: responseSecretarias.data,

        }, function() {

        });

    };

    loadOrigensPorFundo = async () => {

        console.log('Carregando Dados da Origem conforme Fundo');

        let url = '/origensPorFundo/' + this.state.dataSourceIDFundo;

        const responseOrigens = await Api.get(url);

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseOrigens.data);

        this.setState({

            dataSourceOrigens: responseOrigens.data,

        }, function() {

        });

    };

    loadDestinosPorFundo = async () => {

        console.log('Carregando Dados do Destino conforme Fundo');

        let url = '/destinosPorFundo/' + this.state.dataSourceIDFundo;

        const responseDestinos = await Api.get(url);

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseDestinos.data);

        this.setState({

            dataSourceDestinos: responseDestinos.data,


        }, function() {

        });

    };

    loadSubDestinosPorFundo = async () => {

        console.log('Carregando Dados do SubDestino conforme Fundo');

        let url = '/subDestinosPorFundo/' + this.state.dataSourceIDFundo;

        const responseSubDestinos = await Api.get(url);

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseSubDestinos.data);

        this.setState({

            dataSourceSubDestinos: responseSubDestinos.data,


        }, function() {

        });

    };

    loadEmpresas = async () => {

        console.log('Carregando Empresas');
        const responseEmpresas= await Api.get('/empresas');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseEmpresas.data);

        this.setState({

            dataSourceEmpresas: responseEmpresas.data,



        }, function() {
            // Callback
        });

    };

    loadContasContabeis = async () => {

        console.log('Carregando Contas Contabeis');
        const responseContasContabeis= await Api.get('/contascontabeis');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseContasContabeis.data);

        this.setState({

            dataSourceContasContabeis: responseContasContabeis.data,



        }, function() {
            // Callback
        });

    };

    loadTiposAquisicao = async () => {

        console.log('Carregando Tipos Aquisicao');
        const responseTiposAquisicao= await Api.get('/tiposaquisicao');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseTiposAquisicao.data);

        this.setState({

            dataSourceTiposAquisicao: responseTiposAquisicao.data,



        }, function() {
            // Callback
        });

    };

    loadTiposIncorporacao = async () => {

        console.log('Carregando Tipos Incorporacao');
        const responseTiposIncorporacao= await Api.get('/tiposincorporacao');

        //Apresenta no console o JSON obtido como resposta!
        console.log(responseTiposIncorporacao.data);

        this.setState({

            dataSourceTiposIncorporacao: responseTiposIncorporacao.data,
            isLoading:false,


        }, function() {
            // Callback
        });

    };

    concluir = async () =>{

        console.log('Salvando No BD!');

        await Api.post('/salvarCadastro', {
            dataCadastroBem: this.state.date,
            descricaoBem: this.state.descricaoBem,
            valorBem: this.state.valorBem,
            numeroAtualBem: this.state.numeroAtualBem,
            numeroAntigoBem: this.state.numeroAntigoBem,
            observaçõesBem: this.state.observacoesBem,
            qtdACadastrarBem: this.state.qtdACadastrarBem,
            idUsuario: '1',
            idFundo: this.state.dataSourceIDFundo,
            idTipoBem: this.state.dataSourceIDTipoBem,
            idSubElemento: this.state.idSubElementoSelecionado,
            idClassificacao: this.state.idClassificacaoSelecionado,
            idEstadoBem: this.state.idEstadoBemSelecionado,
            idEmpresa: this.state.idEmpresaSelecionado,
            idResponsavel: this.state.idResponsavelSelecionado,
            idOrigem: this.state.idOrigemSelecionado,
            idDestino: this.state.idDestinoSelecionado,
            idSubDestino: this.state.idSubDestinoSelecionado,
            idContaContabil: this.state.idContaContabilSelecionado,
            idTipoAquisicao: this.state.idTipoAquisicaoSelecionado,
            idTipoIncorporacao: this.state.idTipoIncorporacaoSelecionado,
            idSecretaria: this.state.idSecretariaSelecionado,

        }).then(function (response) {

              console.log(response.data);

              if(response.status === 200){

                  alert("Bem salvo com sucesso!");

              } else {
                  alert("Erro ao salvar bem! Tente novamente ou contacte o suporte!");
              }
           }
        ).catch(function (error) {
             alert('Erro na comunicação com a base de dados! Tente novamente ou contacte o suporte!');
        });
    }



    render() {

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

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

                        format="YYYY-MM-DD"

                        minDate="2016-01-01"
                        maxDate="2019-01-01"
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

                    <Text style={styles.labelCampos}>
                        SubElemento:
                    </Text>

                    <View style={styles.pickerBorder}>

                        <Picker

                            style={styles.pickerStyle}
                            selectedValue={this.state.idSubElementoSelecionado}
                            onValueChange={(itemValue, itemIndex) => this.setState({idSubElementoSelecionado:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione" value="0"/>
                            { this.state.dataSourceSubElementos.map((item, key)=>(
                                <Picker.Item label={item.descricaoSubElemento} value={item.idSubElemento} key={key} />)
                            )}

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>


                    <Text style={styles.labelCampos}>
                        Descrição do Bem:
                    </Text>


                    <View style={styles.bordaInput}>

                        <TextInput

                            style={styles.input}
                            placeholder="Informe"
                            placeholderTextColor="#000"
                            onChangeText={(value) => this.setState({descricaoBem: value})}
                            value={this.state.descricaoBem}

                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>


                    <Text style={styles.labelCampos}>
                        Classificação:
                    </Text>


                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.idClassificacaoSelecionado}
                            onValueChange={(itemValue, itemIndex) => this.setState({idClassificacaoSelecionado:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione" value="0"/>
                            { this.state.dataSourceClassificacoes.map((item, key2)=>(
                                <Picker.Item label={item.nomeClassificacao} value={item.idClassificacao} key={key2} />)
                            )}

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-create"} size={30} width={100}  color={"black"}/>

                        </View>

                    </View>


                    <Text style={styles.labelCampos}>
                        Valor do Bem:
                    </Text>


                    <View style={styles.bordaInput}>

                        <TextInput

                            style={styles.input}
                            placeholder="Informe"
                            placeholderTextColor="#000"
                            onChangeText={(value) => this.setState({valorBem: value})}
                            value={this.state.valorBem}
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <Text style={styles.labelCampos}>
                        Novo Número do Bem:
                    </Text>


                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Informe"
                            placeholderTextColor="#000"
                            onChangeText={(value) => this.setState({numeroAtualBem: value})}
                            value={this.state.numeroAtualBem}
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-create"} size={30} width={100}  color={"black"}/>

                        </View>

                    </View>

                    <Text style={styles.labelCampos}>
                        Número do Bem Anterior:
                    </Text>

                    <View style={styles.bordaInput}>

                        <TextInput

                            style={styles.input}
                            placeholder="Informe"
                            placeholderTextColor="#000"
                            onChangeText={(value) => this.setState({numeroAntigoBem: value})}
                            value={this.state.numeroAntigoBem}
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>


                    <Text style={styles.labelCampos}>
                         Estado do Bem:
                    </Text>


                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.idEstadoBemSelecionado}
                            onValueChange={(itemValue, itemIndex) => this.setState({idEstadoBemSelecionado:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione" value="0"/>
                            { this.state.dataSourceEstadosBem.map((item, key3)=>(
                                <Picker.Item label={item.nomeEstadoBem} value={item.idEstadobem} key={key3} />)
                            )}


                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>


                    <Text style={styles.labelCampos}>
                        Quantidade Bens a Cadastrar:
                    </Text>


                    <View style={styles.bordaInput}>

                        <TextInput

                            style={styles.input}
                            placeholder="Informe"
                            placeholderTextColor="#000"
                            onChangeText={(value) => this.setState({qtdACadastrarBem: value})}
                            value={this.state.qtdACadastrarBem}
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                </View>

            </Panel>



                <Panel title="Dados do Responsável">

                    <Text style={styles.labelCampos}>
                        Responsável:
                    </Text>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.idResponsavelSelecionado}
                            onValueChange={(itemValue, itemIndex) => this.setState({idResponsavelSelecionado:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione" value="0"/>
                            { this.state.dataSourceResponsaveis.map((item, key4)=>(
                                <Picker.Item label={item.nomeResponsavel  + ' ' + item.sobrenomeResponsavel} value={item.idResponsavel} key={key4} />)
                            )}

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-create"} size={30} width={100}  color={"black"}/>

                        </View>

                    </View>
                </Panel>


                <Panel title="Localização do Bem">


                    <Text style={styles.labelCampos}>
                        Secretaria:
                    </Text>


                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.idSecretariaSelecionado}
                            onValueChange={(itemValue, itemIndex) => this.setState({idSecretariaSelecionado:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione" value="0"/>
                            { this.state.dataSourceSecretarias.map((item, key5)=>(
                                <Picker.Item label={item.descricaoSecretaria} value={item.idSecretaria} key={key5} />)
                            )}


                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>


                    <Text style={styles.labelCampos}>
                        Origem:
                    </Text>


                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.idOrigemSelecionado}
                            onValueChange={(itemValue, itemIndex) => this.setState({idOrigemSelecionado:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione" value="0"/>
                            { this.state.dataSourceOrigens.map((item, key6)=>(
                                <Picker.Item label={item.descricaoOrigem} value={item.idOrigem} key={key6} />)
                            )}

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>


                    <Text style={styles.labelCampos}>
                        Destino:
                    </Text>


                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.idDestinoSelecionado}
                            onValueChange={(itemValue, itemIndex) => this.setState({idDestinoSelecionado:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione" value="0"/>
                            { this.state.dataSourceDestinos.map((item, key6)=>(
                                <Picker.Item label={item.nomeDestino} value={item.idDestino} key={key6} />)

                            )}

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <Text style={styles.labelCampos}>
                        SubDestino:
                    </Text>


                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.idSubDestinoSelecionado}
                            onValueChange={(itemValue, itemIndex) => this.setState({idSubDestinoSelecionado:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione" value="0"/>
                            { this.state.dataSourceSubDestinos.map((item, key7)=>(
                                <Picker.Item label={item.nomeSubDestino} value={item.idSubDestino} key={key7} />)

                            )}

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-create"} size={30} width={100}  color={"black"}/>

                        </View>
                    </View>

                </Panel>



                <Panel title="Dados Contábeis">

                    <Text style={styles.labelCampos}>
                        Empresa:
                    </Text>


                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.idEmpresaSelecionado}
                            onValueChange={(itemValue, itemIndex) => this.setState({idEmpresaSelecionado:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione" value="0"/>
                            { this.state.dataSourceEmpresas.map((item, key8)=>(
                                <Picker.Item label={item.nomeFantEmpresa} value={item.idEmpresa} key={key8} />)

                            )}


                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>


                    <Text style={styles.labelCampos}>
                        Conta Contábil:
                    </Text>


                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.idContaContabilSelecionado}
                            onValueChange={(itemValue, itemIndex) => this.setState({idContaContabilSelecionado:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione" value="0"/>
                            { this.state.dataSourceContasContabeis.map((item, key9)=>(
                                <Picker.Item label={item.descricaoContaContabil} value={item.idContaContabil} key={key9} />)
                            )}

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>


                    <Text style={styles.labelCampos}>
                        Tipo de Aquisição:
                    </Text>


                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.idTipoAquisicaoSelecionado}
                            onValueChange={(itemValue, itemIndex) => this.setState({idTipoAquisicaoSelecionado:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione" value="0"/>
                            { this.state.dataSourceTiposAquisicao.map((item, key10)=>(
                                <Picker.Item label={item.descricaoTipoAquisicao} value={item.idTipoAquisicao} key={key10} />)
                            )}

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <Text style={styles.labelCampos}>
                        Tipo de Incorporação:
                    </Text>


                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.idTipoIncorporacaoSelecionado}
                            onValueChange={(itemValue, itemIndex) => this.setState({idTipoIncorporacaoSelecionado:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione" value="0"/>
                            { this.state.dataSourceTiposIncorporacao.map((item, key11)=>(
                                <Picker.Item label={item.descricaoTipoIncorporacao} value={item.idTipoIncorporacao} key={key11} />)
                            )}

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                </Panel>



                <Panel title="Dados do Veículo">

                    <Text style={styles.labelCampos}>
                        Número do Documento:
                    </Text>


                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Informe"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>


                    <Text style={styles.labelCampos}>
                        Modelo:
                    </Text>


                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Informe"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <Text style={styles.labelCampos}>
                        Tipo de Combustível:
                    </Text>

                    <View style={styles.pickerBorder}>

                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.state.PickerValue13}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValue13:itemValue})}
                            borderColor

                        >
                            <Picker.Item label="Selecione" value="0"/>
                            <Picker.Item label="Gasolina" value="1"/>
                            <Picker.Item label="Álcool" value="2"/>
                            <Picker.Item label="Diesel" value="3"/>

                        </Picker>

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>


                    <Text style={styles.labelCampos}>
                        Marca:
                    </Text>


                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Informe"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>


                    <Text style={styles.labelCampos}>
                        Ano:
                    </Text>


                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Informe"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <Text style={styles.labelCampos}>
                        Chassi:
                    </Text>


                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Informe"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>

                    <Text style={styles.labelCampos}>
                        Placa:
                    </Text>

                    <View style={styles.bordaInput}>

                        <TextInput
                            style={styles.input}
                            placeholder="Informe"
                            placeholderTextColor="#000"
                        />

                        <View style={styles.iconBorder}>

                            <Ionicons name={"md-checkmark-circle"} size={30} width={100}  color={"green"}/>

                        </View>

                    </View>
                </Panel>


                <Panel title="Observações">

                    <Text style={styles.labelCampos}>
                         Opcional:
                    </Text>

                    <View style={styles.bordaInput}>

                        <TextInput

                            style={styles.input}
                            placeholder="Observações"
                            placeholderTextColor="#000"
                            onChangeText={(value) => this.setState({observacoesBem: value})}
                            value={this.state.observacoesBem}
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
                            this.concluir()
                            //this.props.navigation.navigate('SelecaoFundoPublico')
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
        margin: -10
    },

    viewData:{
        //justifyContent: 'center',
        //alignItems: 'center',
        paddingLeft: 80 // posicionamento do datepicker
    },

    textoDataCadastro:{
        marginTop: 0,
        height :30, // espacamento entre topo e grid
        fontSize: 15,

    },

    labelCampos:{

        marginTop: 18, //espacamento entre componntes do grid
        fontSize: 16,
        fontWeight:'bold',
    },

    pickerBorder:{
        //flex:1,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row', //Alinhamento dos icones de status
        width: 280,  //Reduz ou aumenta borda do picker para direita!!!!!!!!
        //paddingRight: 60
    },

    pickerStyle:{
        width: 290,
        height: 50,
        paddingTop: '10%',
        borderWidth: 1,
    },

    iconBorder:{

        marginTop: 8,
        marginLeft: 9  ///Ajusta icones de status para a esquerda ou direita!!!!!
    },

    bordaInput:{

        marginTop: 10,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        width: 280, //Reduz ou aumentar borda do imput para a direita!!!!!!
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
