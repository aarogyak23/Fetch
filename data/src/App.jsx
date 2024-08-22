import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [postedUser, setPostedUser] = useState({});

  const fetchUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  const submitUser = () => {
    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      address: '123 Main St',   
      phone: '555-555-5555',    
    })
      .then(response => {
        setPostedUser(response.data);
      })
      .catch(error => {
        console.error('Error submitting user:', error);
      });
  };

  return (
    <div>
      <h1>Fetch and Submit User Data</h1>
      <button onClick={fetchUsers}>Get Users</button>
      <button onClick={submitUser}>Submit User</button>

      {users.length > 0 && (
        <div>
          <h2>Fetched Users:</h2>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}

      {postedUser.id && (
        <div>
          <h2>Submitted User:</h2>
          <p>ID: {postedUser.id}</p>
          <p>Name: {postedUser.name}</p>
          <p>Email: {postedUser.email}</p>
          <p>Address: {postedUser.address}</p> 
          <p>Phone: {postedUser.phone}</p>
        </div>
      )}
    </div>
  );
}

export default App;

let promise = new Promise(function (resolve,reject){
  alert("Hello User!!!!")
  resolve(67)
})
console.log("hello one")
setTimeout(function(){
  console.log("Hello again")
},3000)

console.log("hello third")
console.log(promise)