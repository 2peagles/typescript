import './App.css';
import { Container } from './components/props/Container';
import { Greet } from './components/props/Greet';
import PeronsList from './components/props/PeronsList';
import { Person } from './components/props/Person';
import { Status } from './components/props/status';
import { Counter } from './components/State/Counter';

function App() {

  const personName={
    first:'Niall',
    last:'Horan',
  }

  const nameList = [
    {
      first: 'Harry',
      last: 'Styles',
    },
    {
      first: 'Louis',
      last: 'Tomo',
    },
  ]

  return (
    <div className="App">
      <Greet  name='Precious' messageCount={20} isLoggedIn={false}/>
      <Person name={personName} />
      <PeronsList names={nameList}/>
      <Status status='loading'/>
      <Container styles={{ border: '1px solid black', padding: '1rem', margin: '10px 50px' }} />
      <Counter/>
    </div>
  );
}

export default App;
