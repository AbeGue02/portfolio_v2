import { useState } from 'react'
import './App.css'
import WindowContext from './context'
import TopBar from './components/TopBar'
import ContentWindow from './components/ContentWindow'
import { ContentWindowInterface } from './interfaces'
import DocumentItem from './components/DocumentItem'
import { useNavigate } from 'react-router-dom'

function App() {
  const [windowState, setWindowState] = useState<ContentWindowInterface>({
    isVisible: true,
    title: 'None'
  })

  let navigate = useNavigate()

  return (
    <WindowContext.Provider value={{ windowState, setWindowState }}>
      <TopBar/>
      <div className='contentContainer'>
        
        {
          windowState.isVisible && <ContentWindow/>
        }

        <DocumentItem
          title='Who Am I?'
          onClick={() => {
            setWindowState({
              ...windowState,
              isVisible: true
            })
            navigate('/about/me')
          }}/>
        <DocumentItem
          title='Projects'
          onClick={() => {
            setWindowState({
              ...windowState,
              isVisible: true
            })
            navigate('/work/all')
          }}/>
      </div>
    </WindowContext.Provider>
  )
}

export default App
