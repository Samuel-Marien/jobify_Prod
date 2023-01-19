import React from 'react'
import { useAppContext } from '../context/appContext'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext()
  if (!user) {
    return <Navigate to="/landing" />
  }

  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node
}

export default ProtectedRoute
