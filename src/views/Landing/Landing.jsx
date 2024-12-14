import React from 'react'
import { useNavigate } from 'react-router-dom'

function Landing() {

  const navigate = useNavigate()

  return (
    <div><button onClick={()=> navigate('/admin/login')}>Loign</button></div>
  )
}

export default Landing