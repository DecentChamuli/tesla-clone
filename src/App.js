import './App.css';
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Home />
      </div>
    </div>
  );
}

export default App;
