import React from 'react'

export default function Container({children}){
    return (
        <>
            <div className={`sm:container mx-auto flex justify-center items-center flex-col`}>{children}</div>
        </>
    )
}