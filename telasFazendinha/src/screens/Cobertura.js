import React, { Component } from 'react'
import{
    View,
    Text,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput,
    StyleSheet
} from 'react-native'


export default class Cobertura extends Component{
    render() {
        return(
            <Modal transparent={true} visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}>
                        <View>
                            <Text style={styles.title}>Cobertura</Text>
                        </View>
                        <View style={styles.dadosPais}>
                            <Text>Pais</Text>
                        </View>
                        <View style={styles.dadosCobertura}>
                            <Text>dataCobertura</Text>
                        </View>
                        <View style={styles.saveOrCancel}>
                            <Text>saveOrCancel</Text>
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
    dadosCobertura:{
        flex: 2,
        backgroundColor: 'blue'
    },
    saveOrCancel:{
        flex: 1,
        backgroundColor: 'green'
    },
})