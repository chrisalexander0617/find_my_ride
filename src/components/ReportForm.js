import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../components/atoms/Input'
import { Button } from '../components/atoms/Button'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function ReportForm(props){
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [color, setColor] = useState("")
    const [license, setLicense] = useState("")
    const [VIN, setVIN] = useState("");
    const [location, setLocation] = useState("")

    const vehiclesRef = collection(db, 'vehicles')

    let navigate = useNavigate();
    
    const addVehicle = async (e) => {
        e.preventDefault()

        let date = new Date()

        await addDoc(vehiclesRef, 
            {
                make:make,
                model:model,
                color:color,
                license:license,
                VIN:VIN,
                location:location,
                date:date
            }
        ).then(navigate('/'));
    }

    return (
        <>
            <form className="grid grid-cols-2 gap-3" onSubmit={addVehicle}>
                <Input type="text" placeholder="Make" handleChange={e => setMake(e.target.value)} required="required" />
                <Input type="text" placeholder="Model" handleChange={e => setModel(e.target.value)} required="required" />
                <Input type="text" placeholder="Color" handleChange={e => setColor(e.target.value)} required="required" />
                <Input type="text" placeholder="License" handleChange={e => setLicense(e.target.value)} required="required" />
                <Input type="text" placeholder="VIN" handleChange={e => setVIN(e.target.value)} required="required" />
                <Input type="text" placeholder="Location" handleChange={e => setLocation(e.target.value)} required="required" />
                <Button classes="bg-blue-600" type="submit" text="Submit" />
            </form>
        </>
    )
}