import React from 'react'

export const Container = ({children}) => {
    return (
        <>
            <div className={`container sm:container mx-auto flex justify-center items-center flex-col px-10`}>{children}</div>
        </>
    )
}