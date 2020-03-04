import React, {Component} from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import Parições from './Paricoes'
import Cobertura from './Cobertura'

const initialState ={
    showParicoes: false,
    showCobertura: false
}

export default class Menu extends Component {
    state= {
        ...initialState
    }

    render() {
        return(
            <View style={styles.container}>
                <Parições isVisible={this.state.showParicoes}
                    onCancel={() => this.setState({showParicoes: false})}/>
                <Cobertura isVisible={this.state.showCobertura}
                    onCancel={() => this.setState({showCobertura: false})}/>
                <View style={styles.titleBar}> 
                    <Text style={styles.title}>Menu</Text>
                </View> 
                <View style={styles.buttonsZone}>
                    <TouchableOpacity activeOpacity={0.7}
                    onPress={() => this.setState({ showParicoes: true})}
                        style={styles.addButton}>
                        <Text style={styles.buttons}> Parições/Nascimento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}
                    onPress={() => this.setState({ showCobertura: true})}>
                        <Text style={styles.buttons}> Cobertura</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleBar: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderBottomWidth: 4,
    },
    title: {
        fontSize: 50,
    },
    buttonsZone: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        fontSize: 30,
        marginBottom: 70,
        borderColor: 'black',
        borderWidth: 4,
        backgroundColor: '#a7a1a0'
    
    }
})