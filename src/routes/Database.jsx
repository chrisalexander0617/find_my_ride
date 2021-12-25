import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import CardList from '../components/molecules/CardList'
import Card from '../components/atoms/Card'

export default function Database(){
    const [vehicles, setVehicles] = useState([])
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
    },[vehiclesRef])
    
    return (
        <>
            <h1>Database</h1>
            <CardList>
                {vehicles.map((vehicle, i) => {
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