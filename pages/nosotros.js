import React from 'react'
import Layout from '../components/layouts/Layout'
import styled from '@emotion/styled'

const Heading = styled.h1`
  color: blue;
`

const nosotros = () => {
    return (
        <div>
            <Layout> 
                <Heading>Nosotros</Heading>               
            </Layout>            
        </div>
    )
}

export default nosotros
