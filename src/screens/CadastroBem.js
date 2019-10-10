import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, ScrollView, TextInput, Picker} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Panel from "../components/Panel";

export default class CadastroBem extends Component {

    constructor() {
        super();

        this.state = {}
    };

    static navigationOptions = {

        title: 'Emitir QR Code',
        headerTitleStyle: {},
        headerStyle: {
            backgroundColor: '#b1d9e7'
        },
        headerTintColor: 'black',

    };

    render() {

        return (

            <ScrollView style={styles.container}>
                <Panel title="A Panel with short content text">

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

                </Panel>
                <Panel title="A Panel with long content text">
                    <Text>Lorem ipsum...</Text>
                </Panel>
                <Panel title="Another Panel">
                    <Text>Lorem ipsum dolor sit amet...</Text>
                </Panel>

                <Panel title="Another Panel">
                    <Text>Lorem ipsum dolor sit amet...</Text>
                </Panel>
            </ScrollView>

        );
    }

}


var styles = StyleSheet.create({
    container: {
        flex            : 1,
        backgroundColor : '#f4f7f9',
        paddingTop      : 30
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

});

//AppRegistry.registerComponent('Panels', () => Panels);
