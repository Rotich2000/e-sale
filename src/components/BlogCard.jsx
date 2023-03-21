import React from 'react'
import './blogCard.css'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    
        <div className="blog-card">
            <div className="card-image">
                <img className='img-fluid w-100' src="images/blog-1.jpg" alt="blog" />
            </div>
            <div className="blog-content">
                <p className='date'>{new Date().getDate() + '/' + (new Date().getMonth() + 1).toLocaleString() + '/' + new Date().getFullYear()}</p>
                <h5 className='title text-capitalize'> A beautiful sunday morning renaissance</h5>
                <div className="desc text-capitalize">You're only as good as your last collection,
                which is enormous pressure. I Think There is something About
                </div>
                <Link className='text-uppercase button' to="/blog/:id">read more</Link>
            </div>
        </div>
    
  )
}

export default BlogCard