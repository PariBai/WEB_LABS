import React from "react";
const User = ({ index='no index ',username = "Loki", email = "Email@gmail.com" ,website='www.pk.com',address={}}) => {
  const {street,zipcode} = address;
    return (
      <div className="user">
        <img
          src= {`https://api.dicebear.com/8.x/lorelei/svg?seed=${username}`}
          alt="user"
        />
        <div>{username}</div>
        <div>{email}</div>
        {/*<div>{website}</div>*/}
       <div> {street}</div>
       <div>{zipcode}</div>

      </div>
    );
  };
  export default User;