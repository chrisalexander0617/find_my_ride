import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
    const [img, setImg] = useState("")

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
                date:date,
                img:img
            }
        ).then(navigate('/safety'));
    }

    return (
        <>
            <form onSubmit={addVehicle}>
                <div className="grid grid-cols-2 gap-3">
                    <Input type="text" placeholder="Make" handleChange={e => setMake(e.target.value)} required="required" />
                    <Input type="text" placeholder="Model" handleChange={e => setModel(e.target.value)} required="required" />
                    <Input type="text" placeholder="Color" handleChange={e => setColor(e.target.value)} required="required" />
                    <Input type="text" placeholder="License" handleChange={e => setLicense(e.target.value)} required="required" />
                    <Input type="text" placeholder="VIN" handleChange={e => setVIN(e.target.value)} required="required" />
                    <Input type="text" placeholder="Location" handleChange={e => setLocation(e.target.value)} required="required" />
                    <Input type="file" placeholder="Image" handleChange={e => setImg(e.target.value)} required="required" text="Upload" />
                </div>
                <div className="grid grid-cols-1 gap-3">
                    <Button classes="bg-blue-600 my-5 w-full" type="submit" text="Submit" />
                </div>
                <div className="grid grid-cols-1 gap-3">
                    <Link to="/"><Button classes="bg-gray-100 text-blue-900 w-full" text="Go Back" /></Link>
                </div>
            </form>
        </>
    )
}