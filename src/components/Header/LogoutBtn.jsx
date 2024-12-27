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
    <button onClick={logoutHandler} className='inline-block py-2 px-3 duration-500 hover:bg-black hover:text-yellow-300 rounded-lg  text-white'>Logout</button>
  )
}

export default LogoutBtn