import React, { Component } from 'react'
import { View, Text, TochableHighLight } from 'react-native'

export default class Contador extends Component{
    render() {
        return(
            <View>
                <Text style = {{fontSize: 40}}>{this.props.numero}</Text>
            </View>
        )
    } 
}