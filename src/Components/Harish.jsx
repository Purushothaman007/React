import React from 'react'
import image from './image.jpg'; 
function Harish() {
  const user = {
    username: "Hedy Lamarr",
    imageurl: 'https://i.imgur.com/yXOvdOSs.jpg',
    size: 200
  };
  return (
    <div>
      <h1>{user.username}</h1>
      <img
        src={user.imageurl}
        alt={user.username}
        // style={{
        //   width: user.size,
        //   height: user.size,
        //   borderRadius: '50%',
        //   objectFit: 'cover'
        // }}
      />
    </div>
  )
}

export default Harish;