import * as fs from 'fs';
import * as path from 'path';
// import { makeAugmentedSchema } from 'neo4j-graphql-js';
// import { buildSchema, GraphQLObjectType, GraphQLSchema, printSchema, printType } from 'graphql';
import { gql } from 'apollo-server';
import { Neo4jGraphQL } from '@neo4j/graphql';

export const typeDefs = fs.readFileSync(path.resolve(__dirname, '../schema.gql'), 'utf8');
// const typeDefs_ = fs.readFileSync(path.resolve(__dirname, 'schema.gql'), 'utf8');
// export const typeDefs = fs.readFileSync(path.resolve(__dirname, 'schema.gql'), 'utf8');

// <reference path="./index.d.ts" />
// import * as types from '../schema.gql';

// const typeDefs = gql`${types}`;

// export const typeDefs = require('schema.gql');

export const schema = new Neo4jGraphQL({
  typeDefs,
}).schema;

// export const schema = makeAugmentedSchema({ typeDefs: typeDefs_ });

// const types = [ '_Neo4jDateTime', '_Neo4jDateTimeInput', 'Query' ]
//     .map(t => schema_.getType(t))
//     // @ts-ignore
//     .map(printType)
//     .join('\n')
//     .replace(/_Neo4j/g, '')     // claim Neo4j internals
//     .replace(/, _id[^)]+/g, '') // remove spurious fields
//     ;

// const directives = printSchema(new GraphQLSchema({
//   directives: [
//     // @ts-ignore
//     schema_.getDirective('relation'),
//   ],
// }));

// const all = [typeDefs, types, directives].join('\n');
// export const schema = buildSchema(all);

// console.log(printSchema(schema));
