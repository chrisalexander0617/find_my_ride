import React from 'react'

export const Button = props => {
    return (
        <>
            <button 
                type={props.type}                
                onClick={props.handleClick} 
                className={` 
                btn
                px-12 
                py-3 
                text-gray-900
                ${props.classes}`}
                >
                {props.text}
            </button>
        </>
    )
}