import React from 'react'

export const Input = props => {
    return (
        <>
            <input 
                type={props.type}
                placeholder={props.placeholder}  
                className="bg-gray-100 px-6 py-3 shadow-lg border m-3" 
                onChange={props.handleChange}
                required={props.required} 
                multiple={props.multiple}
            />
        </>
    )
}