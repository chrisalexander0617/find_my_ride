import React, {useState} from 'react'
import { Button } from '../components/atoms/Button'

export default function ReportForm(){
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [license, setLicense] = useState("")
    const [VIN, setVIN] = useState("")
    
    const handleChangeMake = e => setMake(e.target.value)
    const handleChangeModel = e => setModel(e.target.value) 
    const handleChangeLicense = e => setLicense(e.target.value) 
    const handleChangeVIN = e => setVIN(e.target.value) 
    
    const handleSubmit = e => {
        e.preventDefault()
        console.log(make, model, license)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input required onChange={handleChangeMake} value={make} placeholder="Make" />
                <input required onChange={handleChangeModel} value={model} placeholder="Model" />
                <input required onChange={handleChangeLicense} value={license} placeholder="License #" />
                <input onChange={handleChangeVIN} value={VIN} placeholder="VIN #" />
                <Button classes="bg-gray-400" type="submit" text="Submit" />
            </form>
        </>
    )
}