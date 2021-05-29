import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/pages/Login';
import LendBook from './components/pages/LendBook';
import EditProfile from './components/pages/EditProfile';
import Profile from './components/pages/Profile';
import Book from './components/pages/Book';
import MyBooks from './components/pages/MyBooks';
import Wallet from './components/pages/Wallet';
import SearchBooks from './components/pages/SearchBooks';

function App() {
    return (
        <Router>
             <Navbar />
             <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/Book:id' exact  component={Book}/>
                <Route path='/MyBooks' exact component={MyBooks}/>
                <Route path='/EditProfile:name:email:number' exact component={EditProfile}/>
                <Route path='/Profile' exact component={Profile}/>
                <Route path='/LendBook:id' exact component={LendBook}/>
                <Route path='/Wallet' exact component={Wallet}/>
                <Route path='/Search' exact component={SearchBooks}/>
             </Switch>
        </Router>
    )
}

export default App
