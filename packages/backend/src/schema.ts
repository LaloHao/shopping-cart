import { schema } from '@shopping-cart/types';
import resolvers from './resolvers';
import { mergeSchemas } from '@graphql-tools/merge';

const mergedSchema = mergeSchemas({
  schemas:  [ schema ],
  resolvers,
})

export default mergedSchema;
