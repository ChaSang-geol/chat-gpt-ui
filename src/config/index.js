
const SERVER_URI = process.env.REACT_APP_SERVER_URI;

if(!SERVER_URI){
    throw new Error("not defined SERVER_URI IN .env file");
}

export default {
    SERVER_URI: process.env.REACT_APP_SERVER_URI 
}