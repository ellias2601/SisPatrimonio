import React,{Component} from 'react';
import {StyleSheet,Text,View,Image,TouchableHighlight,Animated} from 'react-native';
import {AnimatedValue} from "react-native-reanimated"; //Step 1

class Panel extends Component {

    constructor(props) {
        super(props);

        this.icons = {     //Step 2
            'up': require('../assets/Arrowhead-01-128.png'),
            'down': require('../assets/Arrowhead-Down-01-128.png')
        };

        this.state = {       //Step 3
            title: props.title,
            expanded: true,
            animation: new Animated.Value(45)
        };
    };

    toggle() {

        //Step 1
        let initialValue    = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight,
            finalValue      = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight;

        this.setState({
            expanded : !this.state.expanded  //Step 2
        });

        this.state.animation.setValue(initialValue);  //Step 3
        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();  //Step 5
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    render() {
        let icon = this.icons['up'];

        if (this.state.expanded) {
            icon = this.icons['down'];   //Step 4
        }

        //Step 5
        return (
            <Animated.View
                style={[styles.container, {height: this.state.animation}]}>
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>

                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>

                    <Text style={styles.title}>{this.state.title}</Text>

                </View>

                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>

            </Animated.View>
        );
    }
}




var styles = StyleSheet.create({

    container   : {
        marginTop: 22,
        backgroundColor: '#fff',
        margin:-14, //aumenta espacamento entre opcoes grid
        overflow:'hidden',
        paddingLeft: 40//Ajusta grid de cadastro para esquerda ou direita
    },

    titleContainer : {
        flexDirection: 'row'
    },

    title       : {
        marginTop: 5,   //reduz ou aumenta espaco entre calendario e opcoes grid
        flex    : 1,
        padding : 5,
        color   :'#2a2f43',
        fontWeight:'bold',
        fontSize: 20
    },

    button      : {

    },

    buttonImage : {
        marginTop: 5,
        width   : 40,
        height  : 40
    },
    body        : {
        padding     : 10,
        paddingTop  : 0
    }
})

export default Panel;
