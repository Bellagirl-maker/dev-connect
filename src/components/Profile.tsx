import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'


const Profile = () => {
    const user = useSelector((state: RootState) => state.user);
  return (
      <div>
          <h2>Profile</h2>
          {user.isAuthenticated ? (
              <p>Welcome, {user.name}!</p>
          ) : (
              <p>Please log in.</p>
          )}
      
    </div>
  )
}

export default Profile
