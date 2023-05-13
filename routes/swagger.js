import express from 'express';
import * as contact from '../controllers/contact.js';
import swaggerUI from 'swagger-ui-express';
import {createRequire} from "module";
const route = express.Router();

const req = createRequire(import.meta.url);
const swaggerDocument = req('../swagger.json');
console.log(JSON.stringify(swaggerDocument));

// console.log("swagger");

route.use('/api-docs', swaggerUI.serve);
route.get('/api-docs', swaggerUI.setup(swaggerDocument));

console.log(swaggerUI.setup(swaggerDocument));

export default route;