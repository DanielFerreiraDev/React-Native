import React, { Component } from 'react'
import {
    View,
    Text,
    Modal,
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TextInput,
} from 'react-native'

import{
    ContainerDadosPais,
    ContainerDadosFilhos,
    Buttons,
    Title,
    TextTitle,
    TextDados,
    TxtInput,
    TextData,
    ContainerDadosData,
} from '../styles'


import Icon from 'react-native-vector-icons/AntDesign'
import BackGround from '../BackGround'
import { Button } from '../styles'

import moment from 'moment'
import 'moment/locale/pt-br'
import DateTimePicker from '@react-native-community/datetimepicker'
import { ScrollView } from 'react-native-gesture-handler'

const initialState = {date: new Date(), showDatePicker: false}

export default class Paricoes extends Component {
    state= {
        ...initialState
    }
    getDatePicker = () => {
        if(this.state.date == null){ 
            this.state.date = new Date()
        }
        let datePicker = <DateTimePicker value={this.state.date} 
            onChange={(_,date) => this.setState({ date, showDatePicker: false })}
            mode='date'/>
    
        
        
        const dateString = moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')
            
        if(Platform.OS === 'android'){
            datePicker =(
                <ContainerDadosData>
                    <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
                        <TextData>
                            {dateString}
                        </TextData>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </ContainerDadosData>
            ) 
        }
        return datePicker
    }


    render() {
        return(
            <Modal visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}>
                <BackGround >
                    <Title>
                        <TextTitle>Cobertura</TextTitle>
                        <Icon name="infocirlceo" size={30} color="#fff"/>
                    </Title>
                    <ScrollView>
                        <ContainerDadosPais>
                            <TextDados>Dados dos Pais</TextDados>
                            <TextDados>Touro :</TextDados>
                            <TxtInput></TxtInput>
                            <Icon name="pluscircleo" size={30} style={{marginLeft: 300, color:'#fff'}}/>
                            <TextDados>Vaca :</TextDados>
                            <TxtInput></TxtInput>
                            <Icon name="pluscircleo" size={30} style={{marginLeft: 300, color:'#fff'}}/>
                        </ContainerDadosPais>
                        <ContainerDadosFilhos>
                            <TextDados>Data da Cobertura</TextDados>
                            {this.getDatePicker()}
                        </ContainerDadosFilhos>
                        <Buttons>
                            <TouchableOpacity>
                                <Icon name="arrowleft" 
                                size={50} style={{marginTop: 25, marginRight: 50}} onPress={this.props.onCancel} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Button>Salvar</Button>
                            </TouchableOpacity>
                        </Buttons>
                    </ScrollView>
                </BackGround>
            </Modal>
        )
    }
}