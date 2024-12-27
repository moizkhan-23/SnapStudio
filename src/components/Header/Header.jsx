
import { Container, Logo, LogoutBtn } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import authService from "../../Appwrite/Auth";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react"; // Added for toggling mobile menu

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location= useLocation()
  console.log(location);
  console.log(location.pathname);
  
  

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to manage mobile menu toggle

  useEffect(() => {
    // Disable scroll when toggle is true
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    const closeMenu = () => setMobileMenuOpen(false);
    window.addEventListener("click", closeMenu);
  
    return () => {
      // Cleanup
      document.body.style.overflow = "auto"; // Re-enable scroll on unmount
      window.removeEventListener("click", closeMenu);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu state
  };
  // #600c08
  return (
    <header className='py-3 shadow  fixed left-0 top-0 z-50  w-full'style={{backgroundColor:'#8b1a12'}}>
      <Container>
        <nav className='flex justify-between items-center  w-[80%] mx-auto'>
          <div className='mr-4'>
           {/* <h1 className="inline-block space-x-2 text-4xl font-bold text-white duration-500 hover:text-yellow-300 hover:shadow-xl hover:rotate-6 hover:scale-125">
            
            <span className="text-yellow-600
           ">Snap</span><span className="text-black">Studio</span> </h1> */}
   



   <h1 className="inline-block space-x-1 text-3xl sm:text-4xl font-bold text-white duration-500 hover:text-yellow-300 hover:shadow-xl hover:rotate-4 hover:scale-125 cursor-pointer">
  
    <span className="text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-600 text-transparent bg-clip-text">Snap</span>
    <span className="text-gradient bg-gradient-to-r from-red-400 via-yellow-500 to-red-600 text-transparent bg-clip-text">Studio</span>
</h1>




          </div>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex ml-auto text-white  text-xl'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`inline-block px-4 py-2 duration-200  hover:text-yellow-300 rounded-full hover:scale-75'
                  ${location.pathname === item.slug ? 'text-yellow-400' : 'text-white'}`}>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          {/* Mobile Navigation - Hamburger Button */}
          <div className="md:hidden">
           
            {!isMobileMenuOpen ?  <button
              onClick={toggleMobileMenu}
              className="text-white text-2xl"
            >
              <i class="fa-solid fa-bars"></i>
              
            </button>  :  <button
              onClick={toggleMobileMenu}
              className="text-white text-2xl "
            >
           <i class="fa-solid fa-xmark"></i>
              
            </button> }
          </div>
        </nav>

        {/* Mobile Menu - Sliding from Left */}
        <div>
      
        <div
          className={`fixed top-0 left-0 w-3/4 h-full transition-all duration-300 ease-in-out text-xl   ${
            isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
          style={{backgroundColor:'#8b1a12'}}
        >
          <div>
        
   <h1 className=" inline-block  pl-6  mt-3 space-x-1 text-3xl sm:text-4xl font-bold text-white duration-500 hover:text-yellow-300 hover:shadow-xl hover:rotate-4 hover:scale-125 cursor-pointer">
  
  <span className="text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-600 text-transparent bg-clip-text">Snap</span>
  <span className="text-gradient bg-gradient-to-r from-red-400 via-yellow-500 to-red-600 text-transparent bg-clip-text">Studio</span>
</h1>
          </div>
           
          <ul className="pt-0 pl-6 mt-6 text-white text-2xl ">
          {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`inline-block px-4 py-2 duration-200  hover:text-yellow-300 rounded-full hover:scale-75'
                  ${location.pathname === item.slug ? 'text-yellow-400' : 'text-white'}`}>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          <p className="absolute left-0 bottom-5 hover:text-yellow-300 duration-500 px-2 text-white"> &copy; 2025 Moizkhan-23 . All rights reserved.</p>
         
        </div>
        </div>
      </Container>
    </header>
  );
}





































// import {Container,Logo, LogoutBtn,} from "../index"
// import { useDispatch,useSelector } from "react-redux"
// import { Link } from "react-router-dom"
// import authService from "../../Appwrite/Auth"
// import { useNavigate } from "react-router-dom"




//   export default function Header(){

//     const authStatus=useSelector((state)=>state.auth.status)
//     const navigate = useNavigate()

//   const navItems = [
//     {
//       name: 'Home',
//       slug: "/",
//       active: true
//     }, 
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//   },
//   {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//   },
//   {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus,
//   },
//   {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//   },
//   ]



//     return(
//       <header className='py-3 shadow bg-gray-500'>
//       <Container>
//         <nav className='flex'>
//           <div className='mr-4'>
//             <Link to='/'>
//               <Logo width='70px'   />

//               </Link>
//           </div>
//           <ul className='flex ml-auto'>
//             {navItems.map((item) => 
//             item.active ? (
//               <li key={item.name}>
//                 <button
//                 onClick={() => navigate(item.slug)}
//                 className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//                 >{item.name}</button>
//               </li>
//             ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//         </Container>
//     </header>
//   )





//   }