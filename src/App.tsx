import { BrowserRouter } from 'react-router-dom';
import './App.css'
import UIRoot from './UIRoot';

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
          <UIRoot />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
