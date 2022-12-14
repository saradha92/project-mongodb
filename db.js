const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const dbUser = process.env.MONGODB_NAME;
const dbpasswd = process.env.MONGODB_PASSWD;
const clusterAddress = process.env.MONGODB_URL; 


// Connection URL
const url = 'mongodb+srv://${dbUser}:${dbpasswd}@${clusterAddress}/?retryWrites=true&w=majority';

// Database Name
const dbName = 'Cluster0';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  listDatabases(client);

  client.close();
});