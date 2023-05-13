import * as database from '../database/database.js';
import * as contactRepository from '../data/contact.js';
import MongoDb from 'mongodb';



export async function getAll (req, res, next) {
  const lists = await contactRepository.getAll();
  
  res.setHeader('Content-Type', 'application/json');
  console.log(lists);
  res.status(200).json(lists);
  
}

export async function getById (req, res, next) {
  const id = req.params.id;
  
  const result = await contactRepository.getById(id);

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(result);
}

export async function create(req, res, next){
  // console.log(req.body);
  const body = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const contact = await contactRepository.create(body);
  res.status(201).json(contact);

}
export async function update(req, res, next){
  const id = req.params.id;
  const body = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const contact = await contactRepository.getById(id) ;
  console.log('line42', contact);
  if (!contact) {
    return res.sendStatus(404);
  }
  const updated = await contactRepository.update(id, body);
  res.status(200).json(updated);
}

export async function deleteContact(req, res, next){
  const id = req.params.id;
  const contact = await contactRepository.getById(id);
  if(!contact){
    return res.sendStatus(404);
  }
  await contactRepository.remove(id);
  res.sendStatus(204);
}