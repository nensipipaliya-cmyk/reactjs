import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} = useParams()
  return (
    <div className="p-10 text-center bg-gray">
      <h1 className="text-3xl font-bold">
        User ID: {id}
      </h1>
    </div>
  )
}

export default User
