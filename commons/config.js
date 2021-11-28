let BASE_URL = 'https://orion-crepe.herokuapp.com/'

if (ProcessingInstruction.env.REACT_APP_BASE_URL){
    BASE_URL = process.env.REACT_APP_BASE_URL
}

export default BASE_URL;