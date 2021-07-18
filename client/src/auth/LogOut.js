import React, { useContext } from 'react'
import { Context } from '../context/authContext'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
function LogOut() {

    const {getLoggedIn}=useContext(Context)
    const history=useHistory()
    const quit=async ()=>{
        await axios.get('http://localhost:8000/auth/logout')
        await getLoggedIn()

        history.push("/")

        console.log('click')
    }
    return (
        <>
        <button className="btn btn-danger" onClick={quit}>Log out</button>
        </>
    )
}

export default LogOut
