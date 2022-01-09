import React from 'react'
import { Container } from './Container'
import { Link } from 'react-router-dom'
import { Button } from './Button'

import ReportForm from '../ReportForm'



const styles = {

}

export default function Hero(){
    return (
        <>
            <div className="bg-gray-900"  style={{height:'auto', padding:' 100px 0px 175px 0px'}}>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                        <div className="flex flex-col gap-10">
                            <div className="font-bold text-5xl text-green-200">Easy Vehicle Recovery</div>
                            <p className="text-gray-300 text-3xl">Connecting auto owners with solutions to vehicle theft</p>
                            <div className="flex flex-col gap-5 sm:flex-row w-100">
                                <Link to="/database">
                                    <Button text="Recover" classes="bg-green-300 mr-5 text-gray-90 font-bold" />
                                </Link>
                            </div>
                        </div>
                        <div>
                           <ReportForm />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}