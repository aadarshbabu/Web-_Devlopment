import { Navigate, useLocation, } from "react-router-dom"
import React from 'react'


function ProtectedRoute(props) {
    const location = useLocation()

    if (!props.auth) {
        return (
            <Navigate to="/login" state={{ from: location }} replace />
        )
    }
    return props.children
}



export default ProtectedRoute