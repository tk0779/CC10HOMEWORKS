import './App.css';
import {Welcome, sum} from './Welcome'
import {Hello} from './Components/Hello'
import A from './Pages/Home'
import Login from './Login';

function App() {
  const result = sum(20,50);
  return (
    <div className='main'> Hello React {result}
      <Welcome/>
      <Login/>
      <Hello/>
      <A/>
    </div>
  );
}

export default App;
