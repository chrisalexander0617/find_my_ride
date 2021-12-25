import React, {useState} from 'react'
import { Input } from '../components/atoms/Input'
import { Button } from '../components/atoms/Button'

export default function ReportForm(){
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [license, setLicense] = useState("")
    const [VIN, setVIN] = useState("");
    const [images, setImages] = useState("")
    
    const handleChangeMake = e => setMake(e.target.value)
    const handleChangeModel = e => setModel(e.target.value) 
    const handleChangeLicense = e => setLicense(e.target.value) 
    const handleChangeVIN = e => setVIN(e.target.value) 
    const handleImages = e => setImages(e.target.files) 
    
    const handleSubmit = e => { 
        e.preventDefault();
        console.log(make, model, license, VIN, images) 
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Make" handleChange={handleChangeMake} required="required" />
                <Input type="text" placeholder="Model" handleChange={handleChangeModel} required="required" />
                <Input type="text" placeholder="License" handleChange={handleChangeLicense} required="required" />
                <Input type="text" placeholder="VIN" handleChange={handleChangeVIN} required="required" />
                <Input multiple="multiple" type="file" placeholder="Upload File" handleChange={handleImages} />
                <Button classes="bg-gray-400" type="submit" text="Submit" />
            </form>
        </>
    )
}