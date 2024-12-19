
import { Container, Logo, LogoutBtn } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import authService from "../../Appwrite/Auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // Added for toggling mobile menu

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to manage mobile menu toggle

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu state
  };
  // #600c08
  return (
    <header className='py-3 shadow  fixed left-0 top-0 z-50  w-full'style={{backgroundColor:'#8b1a12'}}>
      <Container>
        <nav className='flex justify-between items-center  w-[80%] mx-auto'>
          <div className='mr-4'>
           <h1 className="inline-block text-4xl font-bold text-white duration-500 hover:text-yellow-300 hover:shadow-xl hover:rotate-6 hover:scale-125">SnapStudio</h1>
          </div>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex ml-auto text-white  text-xl'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-4 py-2 duration-200 hover:bg-black hover:text-yellow-300 rounded-full hover:scale-75'
                  >
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
          <h1 className="inline-block text-4xl  font-bold  duration-500 hover:text-yellow-200 text-gray-300 hover:shadow-xl pl-6 mt-3  hover:rotate-6 hover:scale-125">SnapStudio</h1>
          </div>
           
          <ul className="pt-0 pl-6 mt-6 text-white text-2xl ">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                      setMobileMenuOpen(false); // Close menu after clicking
                    }}
                    className='block px-6 py-2 my-2 duration-200 hover:bg-blue-100 rounded-full'
                  >
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