import React, {useEffect, useState} from 'react'
// import appwriteService from "../appwrite/config";
import appwriteService from '../Appwrite/serivce'
import {Container, PostCard} from '../components'
// import service from '../Appwrite/serivce'
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = useState([])
    const userName=useSelector((state)=>state.auth.userData)
    // Query empty array getPosts([]) pass ho rahi hai.
    // Kyunki array empty hai, koi query apply nahi ho rahi, toh Appwrite saare documents return kar raha hoga.
    // Iska result hoga active + inactive dono status show karna.
    

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    console.log(posts);
    
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                       
                        {
                            userName && userName.name ? (<h1 className=' font-bold text-4xl'>{` Hello,${userName.name.toUpperCase()}`}</h1>) :(<h1 className='font-bold text-5xl'>You are not signed in.</h1>)
                        }
                        
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home