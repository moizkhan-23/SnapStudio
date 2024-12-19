import React, {useState, useEffect} from 'react'
// import { Container, PostCard } from '../components'
import { Container } from '../components'
// import appwriteService from "../appwrite/config";
import appwriteService from '../Appwrite/serivce'
import PostCard from '../components/PostCard'
import { use } from 'react'

function AllPosts() {
    const [posts, setPosts] = useState([])
    // useEffect(() => {}, []) 
  
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

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
            <div className='w-full  text-5xl font-bold text-center mt-20 '>
            {posts.length == 0  && 'Post not available'}
</div>
           
            </Container>
    </div>
  )
}

export default AllPosts