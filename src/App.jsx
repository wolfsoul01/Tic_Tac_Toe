import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function Squire({children}){

  return <article className='squire'>

{children}

  </article>
}

function App() {
 

  return(
    <main>
      <h1>Tic Tac Toe </h1>

      <section className='board'>
        <Squire>1</Squire>
        <Squire>1</Squire>
        <Squire>1</Squire>
        <Squire>1</Squire>
        <Squire>1</Squire>
        <Squire>1</Squire>
        <Squire>1</Squire>
        <Squire>1</Squire>
        <Squire>1</Squire>
      </section>
    </main>
  )
}

export default App
