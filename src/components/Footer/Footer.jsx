import { Link } from 'react-router-dom'
import Logo from '../Logo'


export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#8b1a12' }} className='py-6 mb-0  
        '>
      <div className='  md:pl-0 pl-9   '>

        <div className='md:flex md:flex-col md:justify-center md:items-center   '>
          {/* Left side - Logo or Info */}
          <div className='text-white'>
          <h1 className="inline-block text-4xl font-bold text-white duration-500 hover:text-yellow-300 hover:shadow-xl hover:rotate-6 hover:scale-125">SnapStudio
  </h1>
              
             
            </div>

         {/* Right side - Navigation Links */}
        
<ul  className=' md:flex  md:justify-between md:w-[25%] mt-5'>

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
        <div className="h-0.5 bg-white w-[60%] mx-auto mt-10 hover:bg-yellow-400  duration-200 md:flex hidden"></div>

<div className='flex md:w-[20%] w-[15%] md:mx-auto md:justify-between  items-center text-white  mt-7 text-2xl md:text-3xl md:space-x-0 space-x-3'>

        <i className="fa-brands fa-instagram  duration-200 hover:text-yellow-400 cursor-pointer "></i>
        <i className="fa-brands fa-facebook  duration-200 hover:text-yellow-400 cursor-pointer"></i>
        <i className="fa-brands fa-x-twitter  duration-200 hover:text-yellow-400 cursor-pointer"></i>
        <i className="fa-brands fa-youtube  duration-200 hover:text-yellow-400 cursor-pointer"></i>

</div>





      </div>

    </footer>
  );
}