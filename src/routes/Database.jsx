import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import Card from '../components/atoms/Card'

export default function Database(){
    const [vehicles, setVehicles] = useState([])
    const vehiclesRef = collection(db, 'vehicles')
   
    useEffect(() => {

        let isMounted = true 

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

       return () => { isMounted = false }
    },[])
    
    return (
        <>
            <div className="sm:container mx-auto px-10 py-12 flex gap-4 flex-col">
                <h1 className="text-4xl font-bold text-blue-800">Stolen Vehicles</h1>
                <p className="text-gray-700">Find your missing vehicle today</p>
            </div>
            <div className="sm:container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-10">
                {vehicles.map((vehicle, i) => {
                    console.log(vehicle)
                    return ( 
                        <Card 
                            key={i}
                            img={vehicle.img}
                            make={vehicle.make ? vehicle.make : 'Null'}  
                            model={vehicle.model ? vehicle.model : 'Null' } 
                            color={vehicle.color ? vehicle.color : 'Null' }  
                            license={vehicle.license ? vehicle.license : 'Null' } 
                            location={vehicle.location ? vehicle.location : 'Null' } 
                        />
                    ) 
                })}
            </div>
        </>
    )
}