import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Login from './Components/Login';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Main/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
