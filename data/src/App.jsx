import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [postedUser, setPostedUser] = useState({});

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        // debugger
        setUsers(data)
      });
  };

  const submitUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Jane Doe', email: 'jane.doe@example.com' }),
    })
      .then(response => response.json())
      .then(data => setPostedUser(data));
  };

  return (
    <div>
      <h1>Fetch and Submit User Data</h1>
      <button onClick={fetchUsers}>Get Users</button>
      <button onClick={submitUser}>Submit User</button>

      {users.length > 0 && (
        <div>
          <h2>The Users are:</h2>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.email} - {user.phone}
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
        </div>
      )}
    </div>
  );
}

export default App;


// let promise = new Promise(function (resolve,reject){
//   alert("Hello User!!!!")
//   resolve(67)
// })
// console.log("hello one")
// setTimeout(function(){
//   console.log("Hello again")
// },3000)

// console.log("hello third")
// console.log(promise)