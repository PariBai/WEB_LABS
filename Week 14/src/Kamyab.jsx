import React, { useState } from "react";
import './style.css'
export default function Game() {
  const [users, setUsers] = useState([]);

  const goForward = (index) => {
    const updatedData = [...users];
    if (updatedData[index].step < 3) {
      updatedData[index].step += 1;
      setUsers(updatedData);
    }
  };

  const goBack = (index) => {
    const updatedData = [...users];
    if (updatedData[index].step > 1) {
      updatedData[index].step -= 1;
      setUsers(updatedData);
    }
  };

  const createUser = () => {
    setUsers((prev) => [
      ...prev,
      {
        userName:   `user-${prev.length + 1}`,
        step: 1,
      },
    ]);
  };

  return (
    <div className="container">
      <div>
        <button onClick={createUser}>Create User</button>
      </div>
      <div>
        {users.map((userItem, index) => (
          <div key={index} style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
            <div>{JSON.stringify(userItem)}</div>
            <div style={{ display: "flex", gap: "20px" }}>
              {[1, 2, 3].map(step => ( // Render buttons dynamically for steps 1, 2, 3
                <button
                  key={step}
                  style={{ backgroundColor: userItem.step === step ? '#006400' : 'white', color: userItem.step === step ? 'white' : 'black' }} // Change background and text color for selected step
                  disabled={userItem.step === step ? false : true} 
                >
                  Step {step}
                </button>
              ))}
            </div>
            <div>
              <button
                className="back"
                onClick={() => goBack(index)} // Call goBack function on click
                disabled={userItem.step === 1} // Disable the "Previous" button if the user is on the first step
              >
                Previous
              </button>
              <button
                className="forward"
                onClick={() => goForward(index)} // Call goForward function on click
              >
                Forward
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}