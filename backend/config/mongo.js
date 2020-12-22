const { MongoClient, ObjectID } = require('mongodb')
const uri = 'mongodb://localhost:27017'

const client = new MongoClient(uri, { useUnifiedTopology: true })

const connect = async () => await client.connect()
connect()

let db;

if (process.env.NODE_ENV === 'test') {
  db = client.db('profile-naim-testing')
} else {
  db = client.db('profile-naim')
}


module.exports = {
  db,
  ObjectID
}