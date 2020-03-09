import React, {useState, useEffect} from 'react'
import { 
    TouchableOpacity
} from 'react-native'

import {
    ContainerButtons,
    Button
} from './styles'

import Paricoes from './Paricoes/Paricoes'
import Cobertura from './Cobertura/Cobertura'
import BackGround from './BackGround'

export default function ShowModal (){
    const [showParicoes, setShowParicoes] = useState(false)
    const [showCobertura, setShowCobertura] = useState(false)

    return(
        <BackGround>
            <Paricoes isVisible={showParicoes}
                onCancel={() => setShowParicoes(false)}/>
            <Cobertura isVisible={showCobertura}
                onCancel={() => setShowCobertura(false)} />
           <ContainerButtons>
               <TouchableOpacity onPress={() => setShowParicoes(true)}>
                    <Button> Parições/Nascimento</Button>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => setShowCobertura(true)}>
                    <Button> Cobertura</Button>
               </TouchableOpacity>
           </ContainerButtons>
        </BackGround>
    )
}

