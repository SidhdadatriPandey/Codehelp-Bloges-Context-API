import React from 'react'
import { Post } from '../Context/AppContext'


interface CardProps {
    post: Post,
}
const Card = (props: CardProps) => {
    const { post } = props
    return (
        <div className='card'>
            <p className='title'>{post.title}</p>
              <p>By <span>{post.author}</span> on <span>{post.category}</span></p>
              <p>Posted on {post.date}</p>
              <p>{post.content}</p>
              <div>
                {
                  post.tags.map((tag,index)=><span key={index} className='tag'> #${tag} </span>)
                }
              </div>
        </div>
    )
}

export default Card
