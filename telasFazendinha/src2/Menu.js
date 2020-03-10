import React, {useState, useEffect} from 'react'

import { 
    TouchableOpacity,
    Text
} from 'react-native'

import {
    ContainerButtons,
    Button,
    Container
} from './styles'


import BackGround from './BackGround'

export default function Menu ({ navigation }) {
    return(
        <BackGround>
            <Container>
                <TouchableOpacity onPress={() => navigation.navigate('Paricoes')}>
                    <Button>Parições/Nascimentos</Button>
                </TouchableOpacity>
            </Container>
        </BackGround>
    )
}

