import axios from "axios";
import React, { useState } from "react";

function CustomerForm({getCustomers}) {
  const [name, setName] = useState("");

  const saveCustomer =async (e)=>{
      e.preventDefault();

      const customerData={
          name:name
      }
      try {
        await axios.post("http://localhost:8000/customer/",customerData)
      } catch (error) {
          
      }
      
      setName('')

      getCustomers()
  }
  return (
    <div className="d-flex flex-column align-items-center mt-5">
            <h2 className="text-center"> Add New Customer</h2>

      <form onSubmit={saveCustomer} className="d-flex flex-column col-md-6">
        <div className="form-group">
            <input
          type="text"
          placeholder="Customer name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="form-control"
        />
        </div>
       
        <button className="btn btn-success mt-2 ">Save new Customer</button>
      </form>
    </div>
  );
}

export default CustomerForm;
