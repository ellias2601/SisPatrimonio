import {Text, TouchableOpacity, View} from "react-native";

<TouchableOpacity
    style={styles.botao}
    onPress={() => {
        //this.clicou()
        this.props.navigation.navigate('SelecaoFundoPublico')
    }}
>
    <Text style={styles.botaoText}>CONTINUAR</Text>
</TouchableOpacity>
