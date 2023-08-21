import './App.css';
import ProgressBar from './component/ProgressBar';
import {useState,useEffect,} from 'react'


function App() {
  

  const [success,setSuccess] = useState(false)

  const [value,setValue] = useState(0)

  useEffect(() => {

    setInterval(() => {
      setValue((val)=> val + 1)
    }, 100);
    
  }, [])

  return (
    <div className="App">
    <ProgressBar value={value} onComplete={()=> setSuccess(true)}/>

     <span style={{display:'block'}} >{success ? 'completed' : 'loading...'}</span>
    </div>
  );
}

export default App;
