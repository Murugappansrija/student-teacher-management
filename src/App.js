import { Sidebar } from './componants/sidebar';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Home} from "./home/home"
import { Student } from './student/student';
import { Mentor } from './mentor/mentor';
import { Contantpage } from './contantpage/contant';

function App() {
  return (
    <div className="App">
     <Router>
      <Sidebar/>
      <Contantpage/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/student' element ={<Student/>}/>
        <Route path='/mentor' element ={<Mentor/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
