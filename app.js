const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

/**MIDDLEWARES */
app.use(express.json()) // to pass json to res.body
app.use(cors()) // To allow CORS

//API ROUTES 

app.get('/api/user', (req, res) =>{
	res.status(200).json({
		status:"success",
		user: {name: 'domambia', 'email': "omambiadauglous@gmail.com"}
	})
})



/**
CONFIGURE PROD & DEV ENVIROMENT AND
SERVE SPA Application(Vue js) 
*/
app.use(express.static(path.join(__dirname, 'public')));
if(process.env.NODE_ENV === 'production'){
	app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, "public")));
}
// FOR TESTING PURPOSES
else{
	app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, "public")));
}


//EXPORT *app* FOR EXTERNAL USAGE
module.exports = app;

