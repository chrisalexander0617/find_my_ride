import React from 'react'

export const TextCard = props => {
    return (
        <>
            <div className={`card shadow-lg p-10 ${props.classes} flex flex-col gap-2`}>
                <h2 className="text-2xl text-gray-900 font-bold">{props.cardTitle}</h2>
                <p className="text-gray-700">{props.cardText}</p>
            </div>
        </>
    )
}