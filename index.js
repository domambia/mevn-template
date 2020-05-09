const mongoose = require('mongoose');
const dotenv = require('dotenv');

//HANDLE *uncaughtException*
process.on('uncaughtException', err => {
    console.log("Uncaught Exeptions 🔥 ", err.message)
    process.exit(1)
});
dotenv.config({
	path: '.env'
});

// GET THE APP instance
const app = require('./app');

//CONNECT MONGODB 
if(process.env.NODE_ENV === 'production'){
	DB = process.env.DB_PROD;
}else{
	DB = process.env.DB_LOCAL;
}
mongoose.connect(DB, {
	useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(()=>{console.log(`DB Connection Established Successfully`)})


// RUN SERVER
const PORT = process.env.PORT;
const SERVER = app.listen(PORT, (res)=> {
	console.log(`Application running on ${PORT} ...`);
})

//HANDLE *unhandledRejection*
process.on('unhandledRejection', (err) => {
    console.log("Uncaught Rejection 🔥 ", err.message)
    server.close()
    process.exit(1)
});