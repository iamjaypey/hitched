import React from 'react';
import LeftSide from '../../components/LeftSide/LeftSide';
import PostSide from '../../components/PostSide/PostSide';
import RightSide from '../../components/RightSide/RightSide';
import './Timeline.css'

const Timeline = () => {
  return (
    <div className="row">
      {/* Left Side */}
      <LeftSide />

      {/* Posts Side */}
      <PostSide />

      {/* Right Side */}
      <RightSide />
    </div>
  )
}

export default Timeline