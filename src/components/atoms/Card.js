import React from 'react'

export default function Card(props){
    return (
        <>
            <div className="card shadow-lg m-10 p-10 bg-gray-100 ">
                <div>
                    <p>make: {props.make}</p>
                    <p>model: {props.model}</p>
                    <p>color: {props.color}</p>
                    <p>license: {props.license}</p>
                    <p>location: {props.location}</p>
                    <p>date: { props.date ? props.date : "No Date"}</p>
                </div>
            </div>
        </>
    )
}