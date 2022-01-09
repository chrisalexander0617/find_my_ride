import React from 'react'

export const Nav = props => {
    return  (
        <>   
            <nav className="bg-gray-900">
                <div className="container sm:container mx-auto flex gap-3 flex-row justify-end py-5 px-10">
                    {
                        props.user ? 
                        <div>
                            <button onClick={props.handleLogout} className="text-white font-bold p-2 px-5">Log Out</button>
                            <button onClick={props.handleOpenModal} className="text-gray-900 font-bold bg-green-300 p-2 px-5" >Signup</button>
                        </div>
                        :                     
                        <button onClick={props.handleLogin} className="text-white font-bold p-2 px-5">Log In</button>
                    }
                </div>
            </nav>
        </>
    )
}