import React from 'react'
import Home from './Home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div>
      <Home />
    </div>
  )
}

export default App