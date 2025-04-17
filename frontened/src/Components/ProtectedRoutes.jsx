import React from 'react'
import { Navigate } from 'react-router-dom'

// also {children}

// React automatically sirf aur sirf children naam ka prop deta hai jab aap kisi component ke andar koi JSX/component pass karte ho.

const ProtectedRoutes = (props) => {

    let token = window.localStorage.getItem('token')

  return token ? props.children : <Navigate to='/login'/>

}

export default ProtectedRoutes