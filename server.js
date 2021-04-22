//Import Koa
const Koa = require('koa');
//Import body-parser
const bodyParser = require('koa-bodyparser');
//Import the routes
const researcherRoutes = require('./routes/researcher.routes');
//Import cors
const cors = require('@koa/cors');

//Start app
const app = new Koa();
//Use BodyParser
app.use(bodyParser());
//Use cors
app.use(cors());

//Registering the Researcher routes
app.use(researcherRoutes.routes()).use(researcherRoutes.allowedMethods());


//Setup the port
app.listen(3000);
console.log("Application is running on port 3000");