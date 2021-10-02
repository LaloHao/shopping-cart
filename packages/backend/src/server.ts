import {ApolloServer} from 'apollo-server';
import schema from './schema';
import driver from './driver';
import { authenticate } from './authentication';
import type { Driver } from 'neo4j-driver/types';

interface MkContextInput {
  driver: Driver;
  database?: string;
}

export const mkContext = ({ driver, database }: MkContextInput) => function context({ event, context, req }: { event: any, context: any, req: any }): any {
  return ({
    event,
    context,
    driver,
    driverConfig: { database },
    jwt: authenticate(req),
  });
}

export const mkServer = context => new ApolloServer({
  schema,
  context,
});

const context = mkContext({ driver });
const server  = mkServer(context);

export default server;
