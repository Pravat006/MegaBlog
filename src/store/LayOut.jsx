import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { login, logout } from '../store/authSlice'
import { Header, Footer} from '../components'
import { Outlet, useNavigate } from 'react-router-dom'

const LayOut = () => {
    const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const   navigate= useNavigate()
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
        navigate('/')
      }
      else{
        dispatch(logout())
        navigate('/login')
      }
    })
    .finally(()=>setLoading(false))
    
  }, [])
 return !loading? (
    <div className='min-h-screen flex flex-wrap content-between bg-white rounded-md'>
      <div className='w-full block'>
          <Header />
           <Outlet/>
          <Footer/>
      </div>
    </div>
  ): null
}

export default LayOut