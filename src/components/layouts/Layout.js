import React, { useState } from 'react'
import { Nav } from '../Nav'
import { AuthModal } from '../molecules/AuthModal'

function Layout(props){
    const [modal, isModalOpen] = useState(false)
    const [user, setUser] = useState(false)

    const signUp = e => {
        e.preventDefault()
        isModalOpen(false)
        setUser(true)
    }

    const login = e => {
        setUser(false)
        isModalOpen(true)
    }

    return (
        <>
            <Nav 
                user={user}
                handleLogin={login}
                handleLogout={() => setUser(false)}
                handleOpenModal={() => isModalOpen(true)} 
            />
            <main>
                {props.children}
            </main> 
            { modal ? <AuthModal handleSignUp={signUp} user={user} handleCloseModal={() => isModalOpen(false)} /> : null }
        </>
    )
} 
 
export default Layout