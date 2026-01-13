import { Resolvers } from '../../resolvers-types';

export const postResolvers: Resolvers = {
  Query: {
    posts: () => [
      {
        id: 1,
        title: 'hei'
      }
    ]
  }
};
