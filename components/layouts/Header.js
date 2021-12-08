import React from 'react'
// Importacion de componente
import Buscar from '../ui/Buscar'
import Navegacion from './Navegacion'

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <p>p</p>
                    <Buscar/>
                    <Navegacion/>
                </div>
            </div>
            <div>
                <p>Hola: Luis</p>
                <button type="button">Cerrar Sesión</button>
            </div>
        </header>
    )
}

export default Header
