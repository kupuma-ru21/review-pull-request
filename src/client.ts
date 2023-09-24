import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const { getClient } = registerApolloClient(() => new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'https://review-pull-request-back-end.onrender.com/query' }),
}));

export default getClient;
