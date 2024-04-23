import { useState } from 'react'
import './App.css'
import WindowContext from './context'
import TopBar from './components/TopBar'

function App() {
  const [windowShowing, setWindowShowing] = useState<Boolean>(true)

  return (
    <WindowContext.Provider value={{windowShowing, setWindowShowing}}>
      <TopBar/>
    </WindowContext.Provider>
  )
}

export default App
