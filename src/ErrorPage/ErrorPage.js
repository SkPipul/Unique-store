import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <div className='flex flex-col min-h-[700px] justify-center items-center my-10'>
        <img className='w-1/2' src='https://i.ibb.co/LzM6HPL/404-page.webp' alt=''></img>
        <h1 className='text-4xl font-bold'>Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div className=' text-center'>
            <p className='text-3xl font-extrabold'>{error.status}</p>
            <p className='text-xl font-bold text-red-500'>{error.statusText || error.message}</p>
            <p>Back to <Link to='/' className='font-bold text-green-500'>Home Page</Link></p>
          </div>
        )}
      </div>
    </>
  )
}

export default ErrorPage