//Lembrar de fazer um commonStyles para os estilos iguais

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TextInput,
} from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'

import moment from 'moment'
import 'moment/locale/pt-br'
import DateTimePicker from '@react-native-community/datetimepicker'

const initialState = {date: new Date(), showDatePicker: false}

export default class Paricoes extends Component{
    state= {
        ...initialState
    }

    getDatePicker = () => {
        if(this.state.date == null){ // EU QUE FIZ PARA RESOLVER PROBLEMA DE VALUE
            this.state.date = new Date()
        }
        let datePicker = <DateTimePicker value={this.state.date} 
            onChange={(_,date) => this.setState({ date, showDatePicker: false })}
            mode='date'/>
    
        
        
        const dateString = moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')
            
        if(Platform.OS === 'android'){
            datePicker =(
                <View>
                    <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
                        <Text style={styles.date}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            ) 
        }
        return datePicker
    }

    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return(
            <Modal transparent={true} visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'>
                <TouchableWithoutFeedback >
                    <View style={styles.background}>
                        <View>
                            <Text style={styles.title}>Parições/Nascimento</Text>
                        </View>
                        <View style={styles.dadosPais}>
                            <Text style={{fontWeight:'bold', fontSize: 15}}>        Touro:</Text>
                            <TextInput style={styles.input} />
                            <Text style={{fontWeight:'bold', fontSize: 15}}>        Vaca:</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.dadosFilhos}>
                            <Text style={{fontWeight:'bold', fontSize: 15, marginBottom: 20}}>        Dados da Cria:</Text>
                            <Text style={{fontWeight:'bold', fontSize: 15}}>      Nome:</Text>
                            <TextInput style={styles.input} />
                            <Text style={{fontWeight:'bold', fontSize: 15, marginBottom: 10}}>      Data de Nascimento/Parição:</Text>
                            {this.getDatePicker()}
                        </View>
                        <View style={styles.containerButtons}>
                            <TouchableOpacity>
                                <Icon name="arrowleft" size={30} onPress={this.props.onCancel}
                                    style={styles.buttonBack}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.containerSalve}>
                                <Text style={styles.buttonSalve}>Salvar</Text>
                            </TouchableOpacity>
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
        paddingTop:10
    },
    dadosPais:{
        flex: 2,
        justifyContent: 'center'
    },
    dadosFilhos:{
        flex: 2,  
    },
    containerButtons:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom:20,
        marginRight: 10
    },
    buttonBack: {
        fontSize: 30,
        marginLeft: 60,
        marginRight: 80,
        marginBottom: 10
    },
    buttonSalve: {
        fontSize: 15,
        marginLeft: 60,
        marginRight: 60,
        marginTop: 15,
        marginBottom: 15
    },
    containerSalve:{
        alignItems:'center',
        justifyContent: 'center',
        borderColor:'rgba(0,0,0, 0.7)',
        borderWidth: 2,
    },
    input: {
        height: 35,
        width: 250,
        margin: 5,
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: 'rgba(0,0,0, 0.7)',
        borderRadius: 50,
    },
    date: {
        fontSize: 20,
        width: 250,
        marginLeft: 15,
        marginTop: 10,
        borderColor:'rgba(0,0,0, 0.7)',
        borderWidth: 2,
    }
})