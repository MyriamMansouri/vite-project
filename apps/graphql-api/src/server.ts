import { readFileSync } from 'node:fs';
import { createYoga, createSchema } from 'graphql-yoga';
import { Resolvers } from './gql/server/resolvers-types';
import { createServer } from 'node:http';

const typeDefs = readFileSync('./schema.graphql', 'utf8');

const resolvers: Resolvers = {
  Query: {
    posts: async () => {
      return [
        {
          id: 1,
          title: 'hi'
        }
      ];
    }
  }
};

const yoga = createYoga({ schema: createSchema({ typeDefs, resolvers }) });
const server = createServer(yoga);
