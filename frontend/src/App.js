import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Post from './Pages/Post/Post';
import Internships from "./Pages/Internships/Internships";
import PostInternships from './Pages/PostInternship/PostInternship';
import Register from "./Pages/Register/Register";
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path='/internships/new' component={PostInternships} />
				<Route path='/internships' component={Internships} />
				<Route path='/login' component={Login}/>
				<Route path='/post' component={Post} />
				<Route path='/profile' component={Profile}/>
				<Route path='/register' component={Register}/>
				<Route path='/' component={Home}/>
			</Switch>
		</div>
	);
}

//<Route path='/login' render={() =><h1>Hello Gang</h1>}/>
export default App;