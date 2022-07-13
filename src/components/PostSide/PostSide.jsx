import React from 'react'
import Posts from '../Posts/Posts'
import Share from '../Share/Share'

const PostSide = () => {
  return (
    <div className="col-md-6 postSide">
      {/* Share section */}
      <Share />

      {/* Posts section */}
      <Posts />
    </div>
  )
}

export default PostSide