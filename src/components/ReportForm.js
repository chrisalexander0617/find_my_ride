import React, {useState} from 'react'
import { Input } from '../components/atoms/Input'
import { Button } from '../components/atoms/Button'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function ReportForm(){
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [color, setColor] = useState("")
    const [license, setLicense] = useState("")
    const [VIN, setVIN] = useState("");
    const [location, setLocation] = useState("")

    const vehiclesRef = collection(db, 'vehicles')
    
    const addVehicle = async e => {
        e.preventDefault()
        await addDoc(vehiclesRef, 
            {
                make:make,
                model:model,
                color:color,
                license:license,
                VIN:VIN,
                location:location
            }
        )
    }

    return (
        <>
            <form onSubmit={addVehicle}>
                <Input type="text" placeholder="Make" handleChange={e => setMake(e.target.value)} required="required" />
                <Input type="text" placeholder="Model" handleChange={e => setModel(e.target.value)} required="required" />
                <Input type="text" placeholder="Color" handleChange={e => setColor(e.target.value)} required="required" />
                <Input type="text" placeholder="License" handleChange={e => setLicense(e.target.value)} required="required" />
                <Input type="text" placeholder="VIN" handleChange={e => setVIN(e.target.value)} required="required" />
                <Input type="text" placeholder="Location" handleChange={e => setLocation(e.target.value)} required="required" />
                <Button classes="bg-gray-400" type="submit" text="Submit" />
            </form>
        </>
    )
}