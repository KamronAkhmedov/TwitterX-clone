import Auth from '@/components/auth'
import React from 'react'

const Page = () => {
  const user = false
  if (!user) return <div className='container h-screen max-w-7xl'><Auth /></div>

  return (
    <div>Page</div>
  )
}

export default Page