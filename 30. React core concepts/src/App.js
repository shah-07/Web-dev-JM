import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div className="App">
      <Counter></Counter>
      {
        users.map(user => <User name={user.name}
          email={user.email}></User>)
      }
    </div>
  );
}

function User(props) {
  return (
    <div className='person'>
      <h1>Name: {props.name}</h1>
      <h4>Email: {props.email}</h4>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(50);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>

    </div>
  );
}
function Person() {
  return (
    <div style={{ backgroundColor: 'skyblue', border: '3px solid lightsalmon', margin: '20px', borderRadius: '20px' }}>
      <h1>Name: Sakib al Hasan</h1>
      <h4>Profession: Cricketer</h4>
    </div>
  )

}
function Friend(props) {
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '20px'
  }
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Profession: {props.hobby}</h4>
    </div>
  );
}

function Cenema(props) {
  return (
    <div className='person'>
      <h2>nayok: {props.nayok}</h2>
      <h4>nayika: {props.nayika}</h4>
    </div>
  );
}

export default App;



/*
const nayoks = ['Rubel', 'Bapparaz', 'Koober', 'Bappi', 'Shuvo', 'Omar Sani'];

  const cenemas = [
    { nayok: 'koober', nayika: 'kopila' },
    { nayok: 'Rubel', nayika: 'Moushumi' },
    { nayok: 'Razzak', nayika: 'Shabana' },
    { nayok: 'vashan kha', nayika: 'Goyena p' }
  ]
*/

/*{ <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>

      {
        cenemas.map(cenema => <Cenema nayok={cenema.nayok} nayika={cenema.nayika}></Cenema>)
      }

      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Friend name="Nisarul" hobby="gardening"></Friend>
      <Friend name="Rahat" hobby="Traveling"></Friend> }*/