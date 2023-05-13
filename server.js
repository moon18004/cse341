import express from 'express';
import route from './routes/index.js';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import contactRoute from './routes/contact.js'
import * as database from './database/database.js';
import swaggerRoute from './routes/swagger.js';


// const envVariables = process.env;
// const {URI} = envVariables;

// const {MongoClient} = require('mongodb');


dotenv.config();
const port = 8081;
const app = express();
const url = process.env.URI;
app
  .use(express.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
    'Access-Control-Allow_Headers',
    'Origin, X-Requiested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  })
  .use('/', swaggerRoute)
  .use('/', route)
  .use('/contact', contactRoute);

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
  

//   next();
// });

// app.use('/', swaggerRoute);
// app.use('/', route);
// app.use('/contact', contactRoute);


app.listen(port, () => {
  console.log('Server is running on port 8081');
});

database.initDb(url);



// async function listDatabases(client){
//   const databasesList = await client.db().admin().listDatabases();
//   databasesList.

//   console.log("Databases:");
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// main().catch(console.error);


// async function main() {
//   const uri = process.env.URI;
//   const client = new MongoClient(uri);
//   console.log(uri);

//   try {
//     await client.connect();
//     // console.log(client);
//     await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// async function listDatabases(client){

//   const databasesList = await client.db().admin().listDatabases();
//   console.log(databasesList.databases[0]);

//   console.log("Databases:");
// };