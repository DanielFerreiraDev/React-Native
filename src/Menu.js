import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, { MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import ValidarProps from './componentes/ValidarProps'

export default createDrawerNavigator({
    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },
    Contador: {
        screen: () => <Contador numeroInicial={1000}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions : {title : 'MegaSena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React-Native!'/>
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions : { title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto = 'Flexivel!!!' />
    }

}, {drawerWidth: 300})