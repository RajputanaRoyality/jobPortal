import React from 'react'
import {Navigate,Outlet,useLocation}  from "react-router-dom"

const protectedRoute = ({ requiredRole }) => {
    return <Outlet />
};

export default protectedRoute;