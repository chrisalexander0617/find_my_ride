import React, { useEffect, useState } from 'react'
import FindForm from '../components/FindForm'
import { db } from '../firebase'
import CardList from '../components/molecules/CardList'
import Card from '../components/atoms/Card'

import { collection, getDocs } from 'firebase/firestore'

export default function Find(){ 
    const [vehicles, setVehicles] = useState([])
    const [query, setQuery] = useState("")
    const vehiclesRef = collection(db, 'vehicles')
   
    useEffect(() => {
        const getVehicles = async () => {
        const data = await getDocs(vehiclesRef)
        setVehicles(data.docs.map( doc => (
                        {
                            ...doc.data(), 
                            id:doc.id 
                        }
                    )
                )
            )
       }

       getVehicles()
    },[])

    return (
        <>
            <h1>Find Your Vehicle</h1>
            <form>
                <input onChange type="text" placeholder="License"  />
            </form>
            <CardList>
                {vehicles.map((vehicle, i) => {
                    console.log(vehicle)
                    return ( 
                        <Card 
                            key={i}
                            make={vehicle.make}  
                            model={vehicle.model} 
                            color={vehicle.color}  
                            license={vehicle.license} 
                            location={vehicle.location} 
                        />
                    ) 
                })}
            </CardList>
        </>
    ) 
}