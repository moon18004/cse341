import express from 'express';
import * as controller from '../controllers/index.js';
import contactRoute from './contact.js';
import swaggerRoute from './swagger.js';

const routes = express.Router();
routes.use('/contact', contactRoute);
routes.use('/', swaggerRoute);
routes.get('/', controller.getName);



export default routes;