import React from 'react'
import { Container } from '../atoms/Container'
import { TextCard } from '../atoms/TextCard'

 export default function Features(props){
     return (
        <>
            <div style={{marginTop:props.margin}} className="my-12">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <TextCard 
                            classes="bg-white text-white"
                            cardTitle="Faster Recovery"
                            cardText="Don't always rely on law enforcement to always be available to recover your car"
                        />
                        <TextCard 
                            classes="bg-white text-white"
                            cardTitle="Insurance Advice"
                            cardText="Learn about plans, tricks and hacks to make car insurance truly work in your favor"
                        />
                        <TextCard 
                            classes="bg-white text-white"
                            cardTitle="Safety Tips"
                            cardText="Learn tactics that keeps you and your ride safe and sound without putting you and your family in danger "
                        />
                    </div>
                </Container>
            </div>
        </> 
     )
 }