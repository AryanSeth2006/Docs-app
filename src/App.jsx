import React from 'react'
import Bg from './components/Bg'
import Foreground from './components/Foreground'
import Card from './components/Card'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/


function App() {
  return (
    <div className='w-full h-screen bg-zinc-800' >
      <Bg/>
      <Foreground/>
    
  
      

    </div>
  )
}


export default App
