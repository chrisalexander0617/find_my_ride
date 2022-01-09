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
                text-white 
                ${props.classes}`}
                >
                {props.text}
            </button>
        </>
    )
}