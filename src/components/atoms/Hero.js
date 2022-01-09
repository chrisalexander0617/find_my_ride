import React from 'react'
import { Container } from './Container'
import { Link } from 'react-router-dom'
import { Button } from './Button'

import FindForm from '../FindForm'


const styles = {

}

export default function Hero(){
    return (
        <>
            <div className="bg-gray-900"  style={{padding:'200px 0px'}}>
                <Container>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-8">
                            <div className="font-bold text-5xl text-green-200">Easy Vehicle Recovery</div>
                            <p className="text-gray-300 text-3xl">Connecting auto owners with solutions to vehicle theft</p>
                            <div>
                                <Link to="/report">
                                    <Button text="Report" classes="bg-green-300 mr-5 text-gray-900" />
                                </Link>
                                <Link to="/database">
                                    <Button text="Recover" classes="bg-gray-800 mr-5" />
                                </Link>
                            </div>
                        </div>
                        <div>
                           <FindForm />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}