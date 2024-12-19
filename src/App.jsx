
import { useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import authService from './Appwrite/Auth'

import { login,logout } from './store/slice'
import { Header,Footer } from './components/index'



import conf from './conf/conf'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className="flex flex-col min-h-screen bg-red-50">
  <div className="w-full">
    <Header />
  </div>
  <main className="flex-grow">
    <Outlet />
  </main>
<div className="w-full">
    <Footer />
  </div>
</div>

    // <div className=' flex flex-wrap content-between bg-gray-400 '>
    //   <div className='w-full block  '>
    //     <Header />
    //     <main>
    //       <Outlet />
    //     </main>
    //     <Footer />
    //   </div>
    // </div>
  ) : "Loading"
}

export default App