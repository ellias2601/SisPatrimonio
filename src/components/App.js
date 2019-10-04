/**
 * erro createStackNavigation ou reactNavigationStart: reactnavigation.org/docs/en/getting-started.html
 * erro resolvido: github.com/kmagiera/react-native-gesture-handler/issues/676, user dangtienngoc, youtube video, nao linkava imports
 * esconder navegation bar: aboutreact.com/react-native-hide-navigation-bar-and-make-screen-full-screen/
 * dois tipos de navegacao no mesmo app: https://stackoverflow.com/questions/49169996/react-native-combine-2-navigation-type-in-single-apps
 * https://reactnavigation.org/docs/en/tab-based-navigation.html
 * https://snack.expo.io/@react-navigation/stacks-in-tabs-v3
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
//import Animated from 'react-native-reanimated';
import {Login, MenuPrincipal, Emissoes, ExibirQRCode, SelecaoFundoPublico,SelecaoTipoBem, CadastroBem, Consultas, ExibirResultadoConsulta} from '../screens';
import {create} from "react-native/jest/renderer";

const LoginStack = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions:{
                header:null,
            },
        },
    }
);

const HomeStack= createStackNavigator(

    {

        MenuPrincipal: {
            screen: MenuPrincipal
        }
    },
);

const CadastrosStack = createStackNavigator(

    {
        SelecaoFundoPublico:{
            screen: SelecaoFundoPublico
        },

        SelecaoTipoBem:{
            screen: SelecaoTipoBem
        },

        CadastroBem:{
            screen: CadastroBem
        },
    }
);

const ConsultasStack = createStackNavigator(

    {
        Consultas:{
            screen: Consultas
        },

        ExibirResultadoConsulta:{
            screen: ExibirResultadoConsulta
        },

    }
);

const EmissoesStack = createStackNavigator(

    {
        EMISSAO: {
            screen: Emissoes,
            navigationOptions:{
                //header:null,
            },

        },

        ExibirQRCode:{
            screen:ExibirQRCode
        },

    }
);


 const TabNavigator = createBottomTabNavigator(

     {

         LOGIN: {
             screen: LoginStack,
             navigationOptions: {
                 tabBarVisible: false
             }

         },

         HOME: {
             screen: HomeStack,
             navigationOptions:{
                tabBarVisible:true
         }},

         CADASTROS: {screen: CadastrosStack},

         CONSULTAS: {screen: ConsultasStack},

         EMISSOES: {screen: EmissoesStack},
     },
 );



const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {

  render(){
    return <AppContainer/>
  }
}


//export default Login


