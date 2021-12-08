import React from 'react'
import Link from 'next/link'
// Importacion de componente
import Header from './Header'

const Layout = props => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout
