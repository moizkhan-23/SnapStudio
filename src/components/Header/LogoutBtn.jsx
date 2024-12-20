import React from 'react'
import { useDispatch } from 'react-redux'
// import { logout } from '../../store/AuthSlice'
// import logout from '../../Appwrite/Auth'
import authService from '../../Appwrite/Auth'
import { logout } from '../../store/slice'




function LogoutBtn() {
    const dispatch=useDispatch()    
    const logoutHandler=()=>{
        authService.logout().then(()=> {
            dispatch(logout())
        })

    }

  return (
    <button onClick={logoutHandler} className='inline-block py-2 px-6 duration-200 hover:bg-black text-white rounded-full'>Logout</button>
  )
}

export default LogoutBtn