import React from 'react'

export default function Container({children}){
    return (
        <>
            <div className="container test-box">{children}</div>
        </>
    )
}