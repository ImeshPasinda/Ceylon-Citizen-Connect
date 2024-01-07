// functions/mongodbFunction.js

const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
  const uri = process.env.MONGODB_URI; 

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const collection = client.db("ccc").collection("admin");

    const result = await collection.find({}).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  } finally {
    await client.close();
  }
};
