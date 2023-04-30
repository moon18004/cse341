import * as database from '../database/database.js';
import MongoDb from 'mongodb';

const ObjectID = MongoDb.ObjectId;

export async function getAll (req, res, next) {
  const result = database.getDb().db('CSE341').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
}

export async function getById (req, res, next) {
  const userId = new ObjectID(req.params.id);
  const result = await database.getDb().db('CSE341').collection('contacts').find({_id: userId});

  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  })
}