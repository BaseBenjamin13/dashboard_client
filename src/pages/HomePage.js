import React, { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';

function HomePage() {

    const { user, setUser } = useContext(UserContext)
    
  return (
    <div>
        <h1>Home Page</h1>
    </div>
  )
}

export default HomePage