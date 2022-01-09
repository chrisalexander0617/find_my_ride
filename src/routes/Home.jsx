import React from 'react'
import Hero from '../components/atoms/Hero'
import Splash from '../components/molecules/Splash'
import Features from '../components/molecules/Features'


export default function Home(){
    return (
        <>
            <Hero />
            <Features margin="-100px" />
        </>
    )
}