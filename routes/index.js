import express from 'express';
import * as controller from '../controllers/index.js';

const routes = express.Router();
routes.get('/', controller.getName)

export default routes;