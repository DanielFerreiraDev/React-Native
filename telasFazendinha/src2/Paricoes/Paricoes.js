import React, { useState } from 'react'
import {
    Modal,
    Platform,
    TouchableOpacity,
    TextInput,
    ScrollView
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
    ContainerInput
} from '../styles'

import Icon from 'react-native-vector-icons/AntDesign'
import BackGround from '../BackGround'
import { Button } from '../styles'

import Cadastrar from '../Cadastrar/Cadastrar'

import moment from 'moment'
import 'moment/locale/pt-br'
import DateTimePicker from '@react-native-community/datetimepicker'

const initialState = {date: new Date(), showDatePicker: false, showCadastrar: false}

export default function Paricoes ({ navigation }){
    
    const [date, setDate] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [showCadastrar, setShowCadastrar] = useState(false)
    

   
    function getDatePicker ()  {
        /* if(date == null){ 
            date = new Date()
        }
        let datePicker = <DateTimePicker value={date} 
            onChange={(_,date) => setDate(false), setShowDatePicker(false)}
            mode='date'/>

        const dateString = moment(date).format('ddd, D [de] MMMM [de] YYYY')
            
        if(Platform.OS === 'android'){
            datePicker =(
                <ContainerDadosData>
                    <TouchableOpacity onPress={() =>setShowDatePicker(true)}>
                        <TextData>
                            {dateString}
                        </TextData>
                    </TouchableOpacity>
                    {showDatePicker && datePicker}
                </ContainerDadosData>
            ) 
        } */
        return datePicker
    }
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
    return(
        <BackGround>
            <Title>
                <TextTitle>Parições/Nascimentos</TextTitle>
                <Icon name="infocirlceo" size={30} color="#fff"/>
            </Title>
            <ScrollView>
                <ContainerDadosPais>
                    <TextDados>Dados dos Pais</TextDados>
                    <TextDados>Touro :</TextDados>
                    <TxtInput></TxtInput> 
                    
                    <TextDados>Vaca :</TextDados>
                    <TxtInput></TxtInput>

                </ContainerDadosPais>
                <ContainerDadosFilhos>
                    <TextDados>Dados da Cria</TextDados>
                    <TextDados>Nome :</TextDados>
                    <TxtInput></TxtInput>
                    <TextDados>Data de Nascimento/Parição :</TextDados>
                </ContainerDadosFilhos>
                {getDatePicker()}
            </ScrollView>
        </BackGround>
        
    )
}
