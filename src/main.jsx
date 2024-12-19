import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

 import store from './store/store.js'
import { Provider } from 'react-redux'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './pages/Home.jsx'
import Home from './pages/Home.jsx'
// import { AuthLayout, Login } from './components/index.js'
import { AuthLayout, ReEnter } from './components/index.js'


// import AddPost from "./pages/AddPost";
import AddPost from './pages/AddPost.jsx'
// import Signup from './components/index.js'
import Signup from './pages/Signup.jsx'

// import Signup from './pages/Signup.jsx/index.js'
// import EditPost from "./pages/EditPost";
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
// import Post from "./pages/Post";
import AllPosts from './pages/AllPosts.jsx'
// import AllPosts from "./pages/AllPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <ReEnter />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)






















































// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { Provider } from 'react-redux'
// import store from './store/store.js'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//     <App />

//     </Provider>
//   </StrictMode>,
// )

