import { Resolvers } from './resolvers-types';
import { postResolvers } from './resources/post/resolver';

export const resolvers: Resolvers = [postResolvers];
