import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Internships from "./Pages/Internships/Internships";
import Register from "./Pages/Register/Register";
import {Test} from "./Components/Test/Test";
import Home from './Pages/Home/Home';
import { useEffect, useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	const [state, setState] = useState({})

	useEffect(() => {
		axios.get(process.env.REACT_APP_BASEURL+"/hello").then(response => {
			if (response.status == 200){
				console.log(response.data);
				return response.data
			}
		}).then(data => setState(data))
		.then(error => console.log(error))
	},[])

	return (
		<div className="App">
			<Test prop={state}/>
			<Header />
			<Switch>
				<Route path='/internships' component={Internships} />
				<Route path='/login' component={Login}/>
				<Route path='/profile' component={Profile}/>
				<Route path='/register' component={Register}/>
				<Route path='/' component={Home}/>
			</Switch>
		</div>
	);
}

//<Route path='/login' render={() =><h1>Hello Gang</h1>}/>
export default App;