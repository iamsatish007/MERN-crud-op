import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ViewUser from './component/ViewUser';
import AddUser from './component/AddUser';
import UpdateUser from './component/UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ViewUser/>}></Route>
          <Route path="/adduser" element={<AddUser/>}></Route>
          <Route path="/updateuser/:mobile"  element={<UpdateUser/>}></Route>
        </Routes>

      </div>
    </BrowserRouter>


  );
}

export default App;
