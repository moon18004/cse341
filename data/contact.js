import { getDb } from '../database/database.js';
import MongoDb, { ReturnDocument } from 'mongodb';

const ObjectId = MongoDb.ObjectId;

export async function getAll() {
  return getDb().find().toArray();
}

export async function getById(id) {
  return getDb().findOne({ _id: new ObjectId(id) });
}

export async function create(body) {
  const contact = body;
  // console.log(contact);
  return getDb().insertOne(contact);
}
export async function update(id, body) {
  const { firstName, lastName, email, favoriteColor, birthday } = body;
  // console.log(firstName);
  // getDb().findOne({ _id: new ObjectId(id) }).then((result) => {console.log('line22', result)});
  return getDb()
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          firstName,
          lastName,
          email,
          favoriteColor,
          birthday,
        }
      },
      { returnDocument: 'after' }
    )
    .then((result) => {
      // console.log(result);
      return result.value;
    });
}

export async function remove(id){
  return getDb().deleteOne({_id: new ObjectId(id)});
}

