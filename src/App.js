// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {ListProducts} from './components/ListProducts';
import {CreateProducts} from './components/CreateProducts';
import {EditProducts} from './components/EditProducts';
import './App.css';




function App() {

  
  return (

    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
              <Link className="nav-item nav-link active" to={"/"}>Home</Link>
              <Link className="nav-item nav-link" to={"/crear"}>Crear producto</Link>
              <Link className="nav-item nav-link" to={"/editar"}>Editar producto</Link>

            </div>
        </nav>
      <div className="container">
        <br></br>
        Konecta App

      <Routes>

        <Route exact path='/' element={ <ListProducts /> }> </Route>
        <Route path='/crear' element={ <CreateProducts /> }> </Route>
        <Route path='/editar/:product.id' element={ <EditProducts /> }> </Route>


      </Routes>

      </div>

      </Router>

  );
}

export default App;
