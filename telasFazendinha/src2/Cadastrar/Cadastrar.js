//Tela de teste, ja que o Thiago que esta fazendo essa tela

import React ,{Component} from 'react'
import { 
    Modal,
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    Text
} from 'react-native'
import { Icon } from 'react-native-vector-icons/AntDesign'

export default class Cadastrar extends Component {
    render() {
        return(
            <Modal transparent={true} visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'>
                <View style={styles.background}>
                </View>
                <View style={styles.container}></View>
                <View style={styles.background}
                ></View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
})