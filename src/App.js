import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StdListing from './StdListing'; 
import StdCreate from './StdCreate';
import StdDetail from './StdDetail'; 
import StdEdit from './StdEdit'; 

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StdListing />}></Route>
          <Route path='/student/create' element={<StdCreate />}></Route>

          <Route path='/student/detail/:stdid' element={<StdDetail />}></Route>
          <Route path='/student/edit/:stdid' element={<StdEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
