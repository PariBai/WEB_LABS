import React, { useState, useEffect } from "react";
import "./onlineFeed.css";
import User from "./User";

export default function OnlineFeed() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3); // Number of users to display per page

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((apiResult) => apiResult.json())
      .then((data) => {
        setUsers(data);
      });
  };

  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((apiResult) => apiResult.json())
      .then((data) => {
        setPosts(data);
      });
  };

  // Logic for displaying users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main-container">
      <div className="users-container">
        <button onClick={fetchUsers}>Refresh Users</button>
        <h2>Users</h2>
        <div className="users">
          {currentUsers.map((user, index) => (
            <User
              key={index}
              username={user.username}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => (
            <button key={i} onClick={() => paginate(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
