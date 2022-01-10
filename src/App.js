import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">

      <Button
        className='button-primary'                 
        style={{ alignSelf: 'center', }}>Button with any style</Button>

      <Button        
        label={'Primary Button'}
        style={{ alignSelf: 'center', marginLeft: 40 }} />

      <Button
        variant={'outlined'}
        label={'Outlined Button'}
        style={{ alignSelf: 'center', marginLeft: 40 }} />

    </div>
  );
}

export default App;
