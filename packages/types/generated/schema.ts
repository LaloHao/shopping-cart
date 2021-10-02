import * as fs from 'fs';
import * as path from 'path';
import { Neo4jGraphQL } from '@neo4j/graphql';

export const typeDefs = fs.readFileSync(path.resolve(__dirname, '../schema.gql'), 'utf8');

export const schema = new Neo4jGraphQL({
  typeDefs,
}).schema;
