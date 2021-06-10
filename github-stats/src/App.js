import BasicInfo from './components/BasicInfo';
import Header from './components/Header' 
import StatCardContainer from './components/StatCardContainer';
import NameInput from './components/NameInput'
import './main.css'
import {useState, useEffect} from 'react'

function App() {

  const [name, setName] = useState('')
  const [data, setData] = useState({})

  useEffect(()=>{
    fetch('https://api.github.com/users/' + name).then(res => res.json()).then(info => setData(info))
  }, [name])

  return (
    <div class="container">
      <Header/>

      <div class="right-side-header">
        <input class="dark-mode-text" placeholder="Username" value={name} onChange={(e) => { setName(e.target.value) }} />
      </div>

      <BasicInfo data={data}/>
      
      <StatCardContainer data={data}/>
      
      <div class="attribution">
        *This project is neither maintained nor endorsed by GitHub
      </div>
    </div>
  );
}

export default App;
