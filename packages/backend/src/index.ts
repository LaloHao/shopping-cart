require('dotenv').config();

import {ApolloServer} from 'apollo-server';
import schema from './schema';
import driver from './driver';
import { authenticate } from './authentication';

function context({ event, context, req }: { event: any, context: any, req: any }): any {
  return ({
    event,
    context,
    driver,
    jwt: authenticate(req),
  });
}

const server: ApolloServer = new ApolloServer({
  schema,
  context,
});

// @ts-ignore
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
