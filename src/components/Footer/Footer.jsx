import { Link } from 'react-router-dom'
import Logo from '../Logo'


export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#8b1a12' }} className='py-6 mb-0  
        '>
      <div className='  md:pl-0    '>

        <div className='md:flex md:flex-col md:justify-center md:items-center   '>
          {/* Left side - Logo or Info */}
          <div className='text-white'>
          <h1 className=" inline-block  pl-6  mt-3 space-x-1 text-3xl sm:text-4xl font-bold text-white duration-500 hover:text-yellow-300 hover:shadow-xl hover:rotate-4 hover:scale-125 cursor-pointer">
  
  <span className="text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-600 text-transparent bg-clip-text">Snap</span>
  <span className="text-gradient bg-gradient-to-r from-red-400 via-yellow-500 to-red-600 text-transparent bg-clip-text">Studio</span>
</h1>
   
              
             
            </div>

         {/* Right side - Navigation Links */}
        
<ul  className=' flex space-x-2 px-1 md:px-0  md:justify-between  md:space-x-0 md:w-[25%] mt-5'>

            <li>
              <Link
                to='/'
                className='text-white text-lg duration-200 hover:text-yellow-300 hover:scale-110'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/all-posts'
                className='text-white text-lg duration-200 hover:text-yellow-300 hover:scale-110'
              >
                All Posts
              </Link>
            </li>

            <li>
              <Link
                to='/add-post'
                className='text-white text-lg duration-200 hover:text-yellow-300 hover:scale-110'
              >
                Add Post
              </Link>
            </li>
          </ul>
        </div>

        <p className=" text-sm px-1 mt-4 md:text-center  hover:text-yellow-300 duration-500  text-white"> &copy; 2025 Moizkhan-23 . All rights reserved.</p>

        <div className="h-0.5 bg-white w-[60%] mx-auto mt-10 hover:bg-yellow-400  duration-200 md:flex hidden"></div>

<div className='flex px-1 md:px-0 md:w-[20%] w-[15%] md:mx-auto md:justify-between  items-center text-white  mt-7 text-2xl md:text-3xl md:space-x-0 space-x-3'>

        <i className="fa-brands fa-instagram  duration-200 hover:text-yellow-400 cursor-pointer "></i>
        <i className="fa-brands fa-facebook  duration-200 hover:text-yellow-400 cursor-pointer"></i>
        <i className="fa-brands fa-x-twitter  duration-200 hover:text-yellow-400 cursor-pointer"></i>
        <i className="fa-brands fa-youtube  duration-200 hover:text-yellow-400 cursor-pointer"></i>

</div>





      </div>

    </footer>
  );
}