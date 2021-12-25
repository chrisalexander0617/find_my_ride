import React from 'react'

export const Button = props => {
    return (
        <>
            <button 
                type={props.type}                
                onClick={props.handleClick} 
                className={` 
                btn
                mx-2
                px-12 
                py-3 
                text-white 
                rounded-lg 
                shadow-lg
                ${props.classes}`}
                >
                {props.text}
            </button>
        </>
    )
}