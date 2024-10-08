//Import:
const { MongoClient } = require('mongodb');
const logger = require('./logger');

//Declaration:
const dbName = 'mydb';
const collection = 'mycollection';
const dbUri = `mongodb://localhost:27017/${dbName}`;
const mongClient = new MongoClient(dbUri);

//Helper functions:
exports.fetchMongoDocuments = async function() {
    let allValues = '';
    try {
        var cursor = await mongClient.db(dbName).collection(collection).find({});
        allValues = cursor.toArray();
        //logger.logg('info', `${new Date().toISOString()} : fetchMongoDocuments: Documents fetch successful`); 
        logger.logg('info', `fetchMongoDocuments: Documents fetch successful`);        
    }
    catch (e) {
        logger.logg('error', e);
    }
    finally {
        return allValues;
    }
}