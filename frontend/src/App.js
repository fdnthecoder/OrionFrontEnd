import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
//import { useEffect, useState } from 'react';
//import axios from 'axios'

class App extends Component{
	render(){
		return (
			<div className="App">
				<Header />
	
				<Switch>
					<Route path='/login' component={Login}/>
					<Route path='/profile' component={Profile}/>
					<Route exact path='/' component={Home}/>
				</Switch>
			</div>
		);
	}
}

//<Route path='/login' render={() =><h1>Hello Gang</h1>}/>
export default App;
