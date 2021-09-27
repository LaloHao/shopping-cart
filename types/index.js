import fs from 'fs';
import path from 'path';
import { makeAugmentedSchema } from 'neo4j-graphql-js';
import { fileURLToPath } from 'url';
import { buildSchema, GraphQLObjectType, GraphQLSchema, printSchema, printType } from 'graphql';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const typeDefs = fs.readFileSync(path.resolve(__dirname, 'schema.gql'), 'utf8');

const schema = makeAugmentedSchema({ typeDefs });

const types = [ '_Neo4jDateTime', '_Neo4jDateTimeInput', 'Query' ]
    .map(t => schema.getType(t))
    .map(printType)
    .join('\n')
    .replace(/_Neo4j/g, '')     // claim Neo4j internals
    .replace(/, _id[^)]+/g, '') // remove spurious fields
    ;

const directives = printSchema(new GraphQLSchema({
  directives: [
    schema.getDirective('relation'),
  ],
}));

const all = [typeDefs, types, directives].join('\n');
const built = buildSchema(all);

console.log(printSchema(built));
