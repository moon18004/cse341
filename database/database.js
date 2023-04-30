import { MongoClient } from 'mongodb';

let db;
export function initDb(url, callback) {
  if(db){
    console.log('Db is already initialized!');
    return; 
  }
  console.log(url);

  const client = new MongoClient(url);

  db = client;

  // MongoClient.connect(url).then((client) => {
  //   console.log(client);
  //   db = client;
  // })
  // .catch((error) => {
  //   callback(error);
  // });
}

export function getDb() {
  if(!db){
    throw Error('Db not initialized');
  }
  return db;
}
