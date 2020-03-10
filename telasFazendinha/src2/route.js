import { createAppContainer, createSwitchNavigator} from 'react-navigation'

import Paricoes from './Paricoes/Paricoes'
import Cobertura from './Cobertura/Cobertura'
import Menu from './Menu'

const mainNavigation = createSwitchNavigator({
    Menu,
    Paricoes,
    Cobertura
})

export default createAppContainer(mainNavigation)