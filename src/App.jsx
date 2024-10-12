import { useState } from 'react';
import './App.scss';

import Header from './Components/Header';
import Nav from './Components/Nav';
import Presentation from './Components/Presentation';

function App() {
  const [active, setActive] = useState("Qui suis-je ?")

  return (
    <div className="body-content">
      <Header/>
      <Nav active={active} setActive={setActive}/>
    
      <div className='text-center text-3xl'>{active}</div>
      {active === "Qui suis-je ?" ? <Presentation/> : <div className='text-purple-200 text-center items-center mt-10'>Wesh Léane</div>}

    </div>

  )
}

export default App
