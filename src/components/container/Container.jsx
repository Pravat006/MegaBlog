import React from 'react'

function Container({children}) {

  return (
    <div className='w-full max-w-7xl mx-auto px-4'>
        <div>Home page</div>
        {/*{children===true? children: <div>home page</div>}*/}
        {children}
    </div>
  )
}

export default Container