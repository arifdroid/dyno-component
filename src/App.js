import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import BaseButton from './components/BaseButton/BaseButton';
import Switch from './components/Switch/Switch';

function App() {
  return (
    <div className="App">
      <div className='contain-section'>
        <Button
          className='button-primary'
          onClick={()=>{}}
          style={{ alignSelf: 'center' }}>Button with any style</Button>

        <Button
          label={'Primary Button'}
          style={{ alignSelf: 'center', marginLeft: 40 }} />

        <Button
          variant={'outlined'}
          label={'Outlined Button'}
          style={{ alignSelf: 'center', marginLeft: 40 }} />
      </div>

      <div className='contain-section'>
        <BaseButton style={{ width: 400 }}>Base Button injected in-line styling</BaseButton>
        <BaseButton style={{ width: 300, marginLeft: 50 }} className='button-primary'>Base Button injected css styling</BaseButton>
        <BaseButton style={{ marginLeft: 50 }} variant={'outlined'}>Base Button</BaseButton>
      </div>

      <div className='contain-section'>
        <Switch containerStyle={{ marginRight: 40 }}  onChecked={(val)=>{ console.log('click', val)}}/>
        <Switch variant={'secondary'} />
      </div>

    </div>
  );
}

export default App;
