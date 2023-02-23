import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../Post';

export default function PostsContainer() {

    const posts = useSelector(state => state.posts);


   

  return (
    <div>
        {
            posts.map(el => <Post key={el.id} {...el} />)
        }
    </div>
  )
}
