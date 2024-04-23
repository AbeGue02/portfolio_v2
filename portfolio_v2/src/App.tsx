import { useState } from 'react'
import './App.css'
import WindowContext from './context'
import TopBar from './components/TopBar'
import ContentWindow from './components/ContentWindow'
import { ContentWindowInterface } from './interfaces'

function App() {
  const [windowState, setWindowState] = useState<ContentWindowInterface>({
    isVisible: true,
    title: 'None'
  })

  return (
    <WindowContext.Provider value={{ windowState, setWindowState }}>
      <TopBar/>
      <div className='contentContainer'>
        {
          windowState.isVisible && <ContentWindow/>
        }
      </div>
    </WindowContext.Provider>
  )
}

export default App
