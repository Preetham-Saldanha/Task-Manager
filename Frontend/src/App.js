
import './App.css';
import Home from './Home';
import Mytasks from './Navcomponents/Mytasks'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Completedtasks from './Navcomponents/Completedtasks'
import Duetasks from './Navcomponents/Duetasks'
import Incompletetasks from './Navcomponents/Incompletetasks'
import Header from './Header';
import Login from './Login';
import My404Component from './components/My404Component';



function App() {
  return (
    <div className="App">
  
      {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Navcomponents/Mytasks' element={<Mytasks />} />
          <Route path='/Navcomponents/Completedtasks' element={<Completedtasks />} />
          <Route path='/Navcomponents/Duetasks' element={<Duetasks />} />
          <Route path='/Navcomponents/Incompletetasks' element={<Incompletetasks />} />
          <Route path='*' element={<My404Component/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
