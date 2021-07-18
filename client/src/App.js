import axios from 'axios';
import React from 'react';
import AuthContext from './context/authContext';
import  Router  from './Router';

axios.defaults.withCredentials=true

function App() {
  return (
   
    <AuthContext>
      <Router/>
    </AuthContext>
    
    
  );
}

export default App;
