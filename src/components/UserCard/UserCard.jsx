import React from 'react';
import './UserCard.css';
import cover from '../../img/cover.jpg';
import profile from '../../img/profile.jpg'
 
const UserCard = () => {
  return (
    <div className="userCard my-4">
      <div className="card__images">
        <img src={cover} alt="" />
        <img src={profile} alt="" />
      </div>

      <div className="card__names">
        <span>Makanjuola Paul</span>
        <span>Software Developer</span>
      </div>   

      <div className="card__status">
        <hr />
        <div>
          <div className="follow">
            <span>34</span>
            <span>Followings</span>
          </div>

          <div className="line"></div>

          <div className="follow">
            <span>6,543</span>
            <span>Followers</span>
          </div>

          <div className="line"></div>

          <div className="follow">
            <span>54</span>
            <span>Posts</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default UserCard