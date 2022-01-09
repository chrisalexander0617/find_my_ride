import React from 'react'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import { BiX } from "react-icons/bi";

const modalWrapperStyles = {
    position:'fixed',
    top:0,
    left:0,
    height:'100vh',
    width:'100vw',
    backgroundColor:'rgba(0,0,0,0.6)'
}

const modalStyles = {
    maxWidth:'90%',
    position:'relative',
}

export const AuthModal = props => {
    return (
        <>
            <div style={modalWrapperStyles} className="modal-wrapper flex items-center justify-center">
                <div style={modalStyles} className="modal bg-white p-12 flex flex-col gap-3 text-center">
                    <BiX onClick={props.handleCloseModal} style={{position:'absolute', top:'10px', right:'20px', cursor:'pointer'}} className="text-2xl text-red-500" />
                    <h2 className="text-2xl font-bold text-gray-900">Sign Up</h2>
                    <p>Recover and report you vehicle for free</p>
                    {
                        props.user 
                        ? 
                        <div>
                            <form className="flex gap-2 flex-col"  onSubmit={props.handleLogin}>
                                <Input type="email" placeholder="Email" classes="border-gray-900 bg-gray-100 w-full" />
                                <Input type="password" placeholder="Password" classes="border-gray-900 bg-gray-100 w-full" />
                                <Button type="submit" text="Login" classes="bg-green-300 text-gray-900" />
                            </form> 
                            <p className="text-gray-600 text-sm text-center">Already have an account? Login instead!</p>
                        </div>
                        :
                        <div>
                            <form className="flex gap-2 flex-col" onSubmit={props.handleSignUp}>
                                <Input type="text" placeholder="Name" classes="border-gray-900 bg-gray-100 w-full" />
                                <Input type="email" placeholder="Email" classes="border-gray-900 bg-gray-100 w-full" />
                                <Input type="password" placeholder="Password" classes="border-gray-900 bg-gray-100 w-full" />
                                <Button type="submit" text="Sign Up" classes="bg-green-300 text-gray-900" />
                            </form> 
                            <p className="text-gray-600 text-sm text-center">Already have an account? Login instead!</p>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}