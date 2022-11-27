import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthCont } from '../contexts/AuthContext';

const PrivatRouter = () => {
  const { currentUser } = useContext(AuthCont);
  return currentUser ? <Outlet/> :<Navigate to='/login' replace />
}

export default PrivatRouter