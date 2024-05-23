import React, { useState, useEffect } from "react";
import "./users.css";
import { User } from "./User";

export default function MultiUsers() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      const data = await response.json();
      setUsers(data);
  };

  const fetchPosts = async () => {
    setLoading(true);
    
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
     
      const data = await response.json();
      setPosts(data);
      
     
  };

  const addUser = () => {
   
    const newUser = {
      id: Math.floor(Math.random() * 1000),
      name: "New User",
      username: "newuser" + Math.floor(Math.random() * 1000),
      email: "newuser@example.com",
      address: {
        street: "123 New Street",
        suite: "Suite 123",
        city: "New City",
        zipcode: "12345",
        geo: {
          lat: "0",
          lng: "0",
        },
      },
      phone: "123-456-7890",
      website: "example.com",
      company: {
        name: "New Company",
        catchPhrase: "Welcome to our company",
        bs: "Providing excellent services",
      },
    };

    setUsers([...users, newUser]);
  };

  return (
    <div style={{ display: "flex" }}>
 
      <div style={{ flex: 1, overflowY: "auto", paddingRight: "20px" }}>
        <h1 style={{ backgroundColor: "burlywood", borderRadius: "20px", padding: "20px", margin: "20px" }}>
          These are ${users.length} users
        </h1>
        <button onClick={addUser} style={{ marginBottom: "10px" }}>Add User</button>
        <div id="container">
          
          {users.map((userItem, index) => (
            <User
              key={userItem.id}
              index={index}
              email={userItem.email}
              username={userItem.username}
              address={userItem.address}
            />
          ))}
        </div>
      </div>

      
      <div style={{ flex: 1, overflowY: "auto", paddingLeft: "20px" }}>
        <h1 style={{ backgroundColor: "burlywood", borderRadius: "20px", padding: "20px", margin: "20px" }}>
          {These are ${posts.length} posts}
        </h1>
        <button onClick={fetchPosts} style={{ marginBottom: "10px" }}>Fetch Posts</button>
        <div id="container">
         
          {posts.map((postItem) => (
            <div key={postItem.id} style={{ marginBottom: "10px" }}>
              <h3>{postItem.title}</h3>
              <p>{postItem.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}