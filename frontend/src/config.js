let BASE_URL = 'https://orion-crepe.herokuapp.com/';

//let BASE_URL = 'http://127.0.0.1:8000/'
if (process.env.REACT_APP_BASE_URL){
    BASE_URL = process.env.REACT_APP_BASE_URL;
}

let SIGNUP_URL = BASE_URL + "user/signup"; 
//USER SIGN UP PAGE
//POST REQUEST

let SIGNIN_URL = BASE_URL + "user/signin";
//USER LOGIN PAGE 
//POST REQUEST


let PROFILE_URL = BASE_URL + "profile";
//USER PROFILE 
//SHOULD ONLY BE CALLED IF USER IS LOGGED IN 
//GET REQUEST

let JOB_LISTINGS_URL = BASE_URL + "JOB_LISTING";
//JOB LISTINGS 
//GET REQUEST - GETS ALL JOB LISTINGS THAT WERE EVERY POSTED
//POST REQUEST - ADD NEW REQUEST TO LIST OF JOB LISTINGS


let APPLICATION_URL = BASE_URL + "APPLICATION";
//APPLICATIONS THAT THE USER INTENDS OR ALREADY APPLIED FOR AND PROGRESS

const config = {BASE_URL, SIGNIN_URL, SIGNUP_URL, PROFILE_URL, JOB_LISTINGS_URL, APPLICATION_URL}

export default config;