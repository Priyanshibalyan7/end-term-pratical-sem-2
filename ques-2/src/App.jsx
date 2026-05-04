import { useState, useEffect } from "react";
function App(){
  const API = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return(
    <>
      {users.map(user => (
        <div key={user.id}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}

    </>

  )
}
export default App;