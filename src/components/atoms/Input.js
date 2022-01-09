import React from 'react'

export const Input = props => {
    return (
        <>
            <input 
                type={props.type}
                placeholder={props.placeholder}  
                className="bg-gray-900 px-6 py-3 border m-0 text-green-300 border-green-300" 
                onChange={props.handleChange}
                required={props.required} 
                multiple={props.multiple}
            />
        </>
    )
}