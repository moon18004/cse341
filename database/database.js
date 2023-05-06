import MongoDb from 'mongodb';

let db;
export function initDb(url, callback) {
  if (db) {
    console.log('Db is already initialized!');
    return;
  }

  return MongoDb.MongoClient.connect(url) //
    .then((client) => (db = client.db('CSE341')));

  // MongoClient.connect(url).then((client) => {
  //   console.log(client);
  //   db = client;
  // })
  // .catch((error) => {
  //   callback(error);
  // });
}

export function getDb() {
  if (!db) {
    throw Error('Db not initialized');
  }
  return db.collection('contacts');
}
