import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className='text-2xl flex justify-center items-center flex-col h-[100vh]'>
        <h1>
        This is HOME / <br />
        LANDING page
        </h1>
        <Link href="/restaurant/random">
        <h1 className='text-lg text-orange-500'>Click here to go to RESTAURANT PAGE</h1>
        </Link>
    </div>
  )
}

export default HomePage