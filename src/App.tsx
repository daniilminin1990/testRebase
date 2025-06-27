import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import reactLogo from '../public/folderForAssets/assets/react.svg'
import viteLogo from '../public/folderForAssets/assets/vite.svg'
import './App.css'
import {FooInMain} from "./FooInMain.tsx";
import {FooInMain2} from "./FooInMain2.tsx";
import {Foo} from "./Foo.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Foo/>
      <h1>moved images to new dir</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <FooInMain/>
      <h1>SOME TEXT</h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <h1>SOME TEXT</h1>
        <h1>SOME TEXT</h1>
      </div>
      <FooInMain2/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
