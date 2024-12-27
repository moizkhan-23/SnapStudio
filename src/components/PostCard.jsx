import React from 'react'
import service from '../Appwrite/serivce'
import parse from "html-react-parser";

import {Link} from 'react-router-dom'

function PostCard({$id, title, content, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={service.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
            <h4>{parse(content)}</h4>
        </div>
    </Link>
  )
}


export default PostCard