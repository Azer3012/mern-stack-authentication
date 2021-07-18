import React from 'react'

function CustomerList({customers}) {
    return (
        <div className="d-flex flex-column align-items-center mt-5" >
            <ul className="list-group col-md-6">
                {customers.map(customer=>(
                    <li className="list-group-item" key={customer._id}>{customer.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default CustomerList
