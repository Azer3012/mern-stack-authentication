import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Context=createContext()



function AuthContext({children}) {

    const [loggedIn,setLoggedIn]=useState(undefined)

    const getLoggedIn=async ()=>{
        const loggedInRes=await axios.get("http://localhost:8000/auth/loggedIn")
        setLoggedIn(loggedInRes.data)
    }

    useEffect(()=>{
        getLoggedIn()
    },[])
    return (
        <Context.Provider value={{loggedIn,getLoggedIn}}>
            {children}
        </Context.Provider>
    )
}

export default AuthContext

