import './App.css';
import { Greet } from './components/props/Greet';
import PeronsList from './components/props/PeronsList';
import { Person } from './components/props/Person';
import { Status } from './components/props/status';

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
    </div>
  );
}

export default App;
