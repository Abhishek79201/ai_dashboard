import React from 'react'

const ProtectedRoute = async ({ children }) => {
  const session = await auth()
  const user = session?.user
  console.log('user', user)
  return <div>{children}</div>
}

export default ProtectedRoute
