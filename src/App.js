import CeoList from './components/CeoList';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Apple Ceo's Front-End</h1>
      </header>
      <Router>
        <CeoList />
      </Router>
      
    </div>
  );
}

export default App;
