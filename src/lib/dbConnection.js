import mongoose from 'mongoose';

global.mongoose = {
  connection: null,
  promise: null,
};

const dbConnection = async () => {
  if (global.mongoose && global.mongoose.connection) {
    return global.mongoose.connection;
  } else {
    const urlString = process.env.MONGO_URL;

    const promise = mongoose.connect(urlString, {
      autoIndex: true,
    });

    global.mongoose = {
      connection: await promise,
      promise,
    };

    return await promise;
  }
};

export default dbConnection;
