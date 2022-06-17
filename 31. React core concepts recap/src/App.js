import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// JSX, Components, props
function App() {
  return (
    <div className="App">
      <UserComponent></UserComponent>
      <MyComponent name="naim"></MyComponent>
      <MyComponent name="rahat"></MyComponent>
      <MyComponent name="liton"></MyComponent>
    </div>
  );
}

// useEffect
function UserComponent() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>User Loaded: {users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}
function User(props) {
  return (
    <div className='user'>
      <h2>Name: {props.name}</h2>
      <p>Number: {props.phone}</p>
    </div>
  );
}


//Event listener, useState
function MyComponent(props) {
  const [points, setPoints] = useState(1);
  const myStyle = {
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    margin: '10px',
    padding: '5px',
    borderRadius: '20px'
  }
  const handleAddPoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return (
    <div style={myStyle}>
      <h1>{props.name}</h1>
      <p style={{ color: 'magenta', fontWeight: 'bold' }}>I can write my own component</p>
      <h4>{points}</h4>
      <button onClick={handleAddPoints}>Add Points</button>
    </div>
  );
}

export default App;

/*
JSX, Components, props
Event listener, useState
useEffect
*/
