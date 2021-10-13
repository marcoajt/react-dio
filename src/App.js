import React from 'react'

import Index from './components/Item/index'
import Card from './components/Card/Index'

function App() {
  return (
    <div>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <Index>Item 1</Index>
        <Index>Item 2</Index>
        <Index>Item 3</Index>
      </ul>
      <Card/>
    </div>
  )
}

export default App
