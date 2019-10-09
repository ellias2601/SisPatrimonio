/**
 * erro createStackNavigation ou reactNavigationStart: reactnavigation.org/docs/en/getting-started.html
 * erro resolvido: github.com/kmagiera/react-native-gesture-handler/issues/676, user dangtienngoc, youtube video, nao linkava imports
 * esconder navegation bar: aboutreact.com/react-native-hide-navigation-bar-and-make-screen-full-screen/
 * dois tipos de navegacao no mesmo app: https://stackoverflow.com/questions/49169996/react-native-combine-2-navigation-type-in-single-apps
 * https://reactnavigation.org/docs/en/tab-based-navigation.html
 * https://snack.expo.io/@react-navigation/stacks-in-tabs-v3
 * icones: oblador.gitgub.io/react-native-vector-icons/ MaterialDesign, FontAwesome, AntDesign...
 * ideia para alocacoes layout: github.com/react-navigation/react-navigation/issues/253
 * bloquear inversao celular
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
//import Animated from 'react-native-reanimated';
import {Login, MenuPrincipal, Emissoes, ExibirQRCode, SelecaoFundoPublico,SelecaoTipoBem, CadastroBem, Consultas, ExibirResultadoConsulta} from '../screens';
import {create} from "react-native/jest/renderer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'

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
    {
        headerLayoutPreset: "center"
    }
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
    },

    {
        headerLayoutPreset: "center"
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
    },

    {
        headerLayoutPreset: "center"
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

    },

    {
        headerLayoutPreset: "center"
    }
);


 const AppNavigator = createBottomTabNavigator(

     {

         HOME: {
             screen: HomeStack,
             navigationOptions:{
                tabBarVisible:true,
                 tabBarIcon: ({tintColor}) =>(
                     <Ionicons name={"md-home"} size={30}/>
                 )
             }
         },

         CADASTROS: {
             screen: CadastrosStack,
             navigationOptions:{
                 tabBarVisible:true,
                 tabBarIcon: ({tintColor}) =>(
                     <Ionicons name={"md-save"} size={30}/>
                 )
             }
         },

         CONSULTAS: {
             screen: ConsultasStack,
             navigationOptions:{
                 tabBarVisible:true,
                 tabBarIcon: ({tintColor}) =>(
                     <Ionicons name={"md-search"} size={30}/>
                 )
             }

         },

         EMISSÕES: {
             screen: EmissoesStack,
             navigationOptions:{
                 tabBarVisible:true,
                 tabBarIcon: ({tintColor}) =>(
                     <Ionicons name={"md-barcode"} size={30}/>
                 )
             }
          },
     },

     {

        tabBarOptions: {

            activeTintColor: '#fff',
            inactiveTintColor: '#000',
            showIcon: true,

            style: {
             backgroundColor: '#b1d9e7'
            },
        },

     },

 );

 const AppNavegation = createSwitchNavigator(

     {

         initialStack: LoginStack,
         appStack: AppNavigator
     },

     {

         initialRouteName: "initialStack"
     }

 );

const AppContainer = createAppContainer(AppNavegation);

export default class App extends Component {

  render(){
    return <AppContainer/>
  }
}


//export default Login


