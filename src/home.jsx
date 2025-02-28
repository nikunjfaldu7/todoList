import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

    const validateInput = () => {
    if (!name) return alert("Please add name.");
    if (!age) return alert("Please add Age");
    return true;
  };

  const handleAdd = () => {
    if (!validateInput()) return;
    setShowForm(!showForm)
    setUsers([...users, { name, age }]);
    alert("Entry added successfully!");
    setName("");
    setAge("");
  };
  const handleDeleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };
  return (
    <div className="container mt-4">
      {!showForm ? (
        <button className="btn btn-primary mb-3" onClick={() => setShowForm(!showForm)}>
          ADD
        </button>
      ) : (
        <div className="card p-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[A-Za-z ]*$/.test(value)) { // Allows only letters and spaces
                setName(value);
              }
            }}
          />
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <div className="row">
            <div className="col-sm-6">
              <button className="btn btn-success w-100" onClick={handleAdd}>Add</button>
            </div>
            <div className="col-sm-6">
              <button className="btn btn-secondary w-100" onClick={() => setShowForm(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
      <ul className="list-group mt-3">
        {users.map((user, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            I'm {user.name} and I am {user.age} years old!
            <button className="btn btn-danger" onClick={() => handleDeleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

