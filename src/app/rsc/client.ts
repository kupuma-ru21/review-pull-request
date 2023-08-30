import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

// eslint-disable-next-line import/prefer-default-export
export const { getClient } = registerApolloClient(
  () => new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://fragrant-shadow-9470.fly.dev/',
    }),
  }),
);
