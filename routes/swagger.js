import express from 'express';
import * as contact from '../controllers/contact.js';
import swaggerUI from 'swagger-ui-express';
import {createRequire} from "module";

const require = createRequire(import.meta.url);
const swaggerDocument = require('../swagger.json');
console.log(swaggerDocument);

const route = express.Router();

route.use('/api-docs', swaggerUI.serve);
route.get('/api-docs', swaggerUI.setup(swaggerDocument));

export default route;