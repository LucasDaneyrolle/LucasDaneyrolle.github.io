import { useState } from 'react'
import './App.scss'

import Header from './components/Header'
import Nav from './components/Nav'
import Presentation from './components/Presentation'
import Skills from './components/Skills'

import Chevron from '/Chevron.svg'

import { menuItems } from './ressources/menuItems'


function App() {
  const [active, setActive] = useState("Qui suis-je ?")

  const handleChangeLeftSection = () => {
    const index = menuItems.indexOf(active)
    console.log(index)
    if (index === 0) {
      setActive(menuItems[menuItems.length - 1])
    } else {
      setActive(menuItems[index - 1])
    }
  }

  const handleChangeRightSection = () => {
    const index = menuItems.indexOf(active)
    console.log(index)
    if (index === menuItems.length - 1) {
      setActive(menuItems[0])
    } else {
      setActive(menuItems[index + 1])
    }
  }

  return (
    <div className="body-content">
      <Header/>
      <Nav active={active} setActive={setActive}/>

      <div className='flex flex-row mt-2 h-[70vh] items-center justify-center'>
        <div className='text-8xl items-center ml-12 cursor-pointer' onClick={() => handleChangeLeftSection()}><img className='size-16 rotate-180' src={Chevron} alt="Chevron Left Icon" /></div>
          {active === "Qui suis-je ?" && <Presentation/>}
          {active === "Mes compétences" && <Skills/>}
        <div className='text-8xl mr-12 cursor-pointer' onClick={() => handleChangeRightSection()}><img className='size-16' src={Chevron} alt="Chevron Right Icon" /></div>
      </div>
    </div>
  )
}

export default App
