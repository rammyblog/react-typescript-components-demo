import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { List } from './components/generics/List';
import Greet from './components/Greet';
import { Heading } from './components/Heading';
import Input from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Status } from './components/Status';
import { Toast } from './components/templateLiterals/Toast';

function App() {
  const personName = {
    firstName: 'John',
    lastName: 'Doe',
  };
  const nameList = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Doe' },
    { firstName: 'Jack', lastName: 'Doe' },
  ];

  const containerCss = { border: '1px solid black', padding: '1rem' };

  return (
    <div className="App">
      <Greet tech="React" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicarpio!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => console.log('Button clicked', event, id)}
      />
      <Input handleChange={(event) => console.log(event)} value="" />
      <Container styles={containerCss} />
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Private isLoggedIn={true} Component={Profile} />
      <List
        items={['Batman', 'Superman', 'Spiderman']}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <RandomNumber value={10} isPositive />
      <Toast position='left-center' />
    </div>
  );
}

export default App;
