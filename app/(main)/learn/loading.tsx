import React from 'react'

import { Loader } from 'lucide-react'
const loading = () => {
  return (
    <div className='hh-full w-full flex items-center justify-center'>
      <Loader  className='h-6 w-6 text-muted-foreground animate-spin'/> 
    </div>
  )
}

export default loading
