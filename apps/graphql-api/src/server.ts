import { readFileSync } from 'node:fs';
import { Resolvers } from './gql/server/resolvers-types';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const typeDefs = readFileSync('./schema.graphql', 'utf8');

const resolvers: Resolvers = {
  Query: {
    posts: () => [
      {
        id: 1,
        title: 'hi'
      }
    ]
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
const info = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`🚀  Server ready at: ${info.url}`);
