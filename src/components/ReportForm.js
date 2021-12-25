import React, {useState} from 'react'
import { Input } from '../components/atoms/Input'
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
        console.log(make, model, license, VIN)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input placeholder="Make" handleChange={handleChangeMake} required="required" />
                <Input placeholder="Model" handleChange={handleChangeModel} required="required" />
                <Input placeholder="License" handleChange={handleChangeLicense} required="required" />
                <Input placeholder="VIN" handleChange={handleChangeVIN} required="required" />
                <Button classes="bg-gray-400" type="submit" text="Submit" />
            </form>
        </>
    )
}