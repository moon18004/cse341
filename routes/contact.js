import express from 'express';
import * as contact from '../controllers/contact.js';

const route = express.Router();

route.get('/', contact.getAll);
route.get('/:id', contact.getById);

export default route;