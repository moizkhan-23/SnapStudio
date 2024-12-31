import React, {useState, useEffect} from 'react'
// import { Container, PostCard } from '../components'
import { Container } from '../components'
// import appwriteService from "../appwrite/config";
import appwriteService from '../Appwrite/serivce'
import PostCard from '../components/PostCard'
import { use } from 'react'
import { useSelector } from 'react-redux'


function AllPosts() {
    const [posts, setPosts] = useState([])
    const userName=useSelector((state)=>state.auth.userData)
    useEffect(() => {
        if(userName?.$id){ 
  
    appwriteService.getPosts(userName.$id,false).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
}else {
    // Optionally, clear posts if user is logged out
    setPosts([]); // Clear posts or handle the UI for logged-out state
}
}, [userName])
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
            <div className='w-full  text-5xl font-bold text-gray-400 text-center mt-20 '>
            {posts.length == 0  && 'Post not available'}
</div>
           
            </Container>
    </div>
  )
}

export default AllPosts