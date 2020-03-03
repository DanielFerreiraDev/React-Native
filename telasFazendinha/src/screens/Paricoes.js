//Lembrar de fazer um commonStyles para os estilos iguais

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TextInput,
} from 'react-native'

export default class Paricoes extends Component{
    render(){
        return(
            <Modal transparent={true} visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}>
                        <View>
                            <Text style={styles.title}>Parições/Nascimento</Text>
                        </View>
                        <View style={styles.dadosPais}>
                            <Text>pais</Text>
                        </View>
                        <View style={styles.dadosFilhos}>
                            <Text>Filhos</Text>
                        </View>
                        <View style={styles.saveOrCancel}>
                            <Text>SaveOrCancel</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }   
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 15,
        paddingTop: 15
    },
    dadosPais:{
        flex: 2,
        backgroundColor: 'red'
    },
    dadosFilhos:{
        flex: 2,
        backgroundColor: 'blue'
    },
    saveOrCancel:{
        flex: 1,
        backgroundColor: 'green'
    },
})