import React from 'react'

const BlogPost = ( { params} ) => {
  return (
      <div>BlogPost id is: { params.id}</div>
  )
}

export default BlogPost