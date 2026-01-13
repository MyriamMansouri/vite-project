import { readFileSync } from 'node:fs';
import { Resolvers } from './gql/server/resolvers-types';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import express from 'express';
import cors from 'cors';
import { authMiddleware, handleLogin } from './auth';
import { resolvers } from './gql/server/resolvers';
import { expressMiddleware } from '@as-integrations/express5';

const typeDefs = readFileSync('./schema.graphql', 'utf8');

const app = express();
app.use(cors(), express.json(), authMiddleware);
app.post('/login', handleLogin);

const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();

app.use('/graphql', expressMiddleware(apolloServer));

app.listen({ port: 9000 }, () => {
  console.log(`🚀  Server ready at: http://localhost:9000/graphql`);
});
