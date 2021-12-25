import React from 'react'
import ReportForm from '../components/ReportForm'
import Container from '../components/atoms/Container'

export default function Report(){ 
    return (
        <>
        <h1>Report a stolen Vehicle</h1>
        <Container size="md">
            <ReportForm />
        </Container>
        </>
    )
}