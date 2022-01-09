import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = props => {
    return  (
        <>   
            <nav className="bg-gray-900">
                <div className="w-full container sm:container mx-auto flex gap-3 flex-row justify-end py-5 px-10">
                {
                    props.isLoggedIn ? 
                    <button 
                        onClick={props.handleLogout} 
                        className="text-white font-bold p-2 px-5"
                    >
                    Log Out
                    </button>
                    :
                    <button 
                        onClick={props.openModal} 
                        className="text-white font-bold p-2 px-5"
                    >
                    Log In
                    </button>
                }
                <Link to="/" className="text-gray-900 font-bold bg-green-300 p-2 px-5" >Signup</Link>
                </div>
            </nav>
        </>
    )
}