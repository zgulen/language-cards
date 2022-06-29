import './App.css';
import Card from './components/cards/Card';
import Header from './components/Header/Header';
import {languages} from "./utill/data.js"

function App() {
  return (

    <div className="App">
      <Header />
      <Card/>
    </div>
    );
}

export default App;
