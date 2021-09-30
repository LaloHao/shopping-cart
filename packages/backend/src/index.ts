require('dotenv').config();

import server from './server';

// @ts-ignore
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
