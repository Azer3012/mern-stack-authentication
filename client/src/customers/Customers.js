import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'

function Customers() {

    const [customers,setCustomers]=useState([])

    const getCustomers=async ()=>{

        try {
            const response=await axios.get("http://localhost:8000/customer/")
            setCustomers(response.data)
            
        } catch (err) {
            console.log(err);
        }
        
    }


    useEffect(()=>{
        getCustomers()
    },[])
    return (
        <div>
            <CustomerForm getCustomers={getCustomers}/>
            <CustomerList customers={customers}/>
        </div>
    )
}

export default Customers
