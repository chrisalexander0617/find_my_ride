import React from 'react'
import { methods } from '../functions/methods'

import Container from '../components/atoms/Container'
import { Button }  from '../components/atoms/Button'

export default function Home(){
    return (
        <>
            <Container>
                <Button 
                    handleClick={methods.test} 
                    classes="bg-gray-400" 
                    text="Find" 
                />
                 <Button 
                    handleClick={methods.test} 
                    classes="bg-red-400" 
                    text="Report" 
                />
            </Container>
        </>
    )
}