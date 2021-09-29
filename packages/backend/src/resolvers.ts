import { compareSync, hashSync } from 'bcrypt';
import { typeDefs } from '@shopping-cart/types';
import driver from './driver';
import { OGM } from '@neo4j/graphql-ogm';
import { createJWT } from './authentication';

const ogm = new OGM({ typeDefs, driver });
const User = ogm.model("User");

const resolvers = {
  Mutation: {
    signUp: async (_source, args) => {
      args.password = hashSync(args.password, 10);
      const { name, username, password } = args;

      const [existing] = await User.find({
        where: {
          username,
        },
      });

      if (existing) {
        throw new Error(`User with username ${username} already exists!`);
      }

      const {users: [user]} = await User.create({
        input: [
          {
            name,
            username,
            password,
          }
        ]
      });

      return createJWT({ sub: user.id });
    },
    login: async (_source, args) => {
      const { username, password } = args;
      const [user] = await User.find({
        where: {
          username,
        },
      });

      if (!user) {
        throw new Error(`User with username ${username} not found!`);
      }

      const correctPassword = compareSync(password, user.password);

      if (!correctPassword) {
        throw new Error(`Incorrect password for user with username ${username}!`);
      }

      return createJWT({ sub: user.id });
    },
  },
};

export default resolvers;
