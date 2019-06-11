import React from 'react'
import './App.scss'

import LoadingSpin from './components/LoadingSpin'

const App: React.FC = () => {
  return (
    <div className="app">
      <LoadingSpin/>
    </div>
  )
}

export default App
