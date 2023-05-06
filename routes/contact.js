import express from 'express';
import * as contact from '../controllers/contact.js';

const route = express.Router();

route.get('/', contact.getAll);
route.get('/:id', contact.getById);
route.post('/', contact.create);
route.put('/:id', contact.update);
route.delete('/:id', contact.deleteContact);

export default route;