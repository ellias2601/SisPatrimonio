/**
 * erro createStackNavigation ou reactNavigationStart: reactnavigation.org/docs/en/getting-started.html
 * erro resolvido: github.com/kmagiera/react-native-gesture-handler/issues/676, user dangtienngoc, youtube video, nao linkava imports
 * esconder navegation bar: aboutreact.com/react-native-hide-navigation-bar-and-make-screen-full-screen/
 * dois tipos de navegacao no mesmo app: https://stackoverflow.com/questions/49169996/react-native-combine-2-navigation-type-in-single-apps
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
//import Animated from 'react-native-reanimated';
import {Login, MenuPrincipal, SelecaoRecurso} from '../screens';

const AppNavigator = createStackNavigator(
    {
     Login: {
        screen: Login,
          navigationOptions:{
            header:null,
          },
      },
      MenuPrincipal: {
        screen: MenuPrincipal
      }
    },

    {
      initialRouteName: 'Login'
    }
);

 const TabNavigator = createBottomTabNavigator(

     {
         Login:{
             screen: Login,
             navigationOptions:{
                 tabBarVisible:false
             }
         },

         MenuPrincipal: MenuPrincipal,

         SelecaoRecurso: SelecaoRecurso
         //Rotas: AppNavigator
     },

 );

 const rootNavigation = createStackNavigator({
     AppNavigator: {screen: AppNavigator},
     TabNavigator: {screen: TabNavigator},
 });

const AppContainer = createAppContainer(TabNavigator, rootNavigation, AppNavigator);

export default class App extends Component {

  render(){
    return <AppContainer/>
  }
}


//export default Login


