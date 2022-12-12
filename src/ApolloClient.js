import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => new ApolloClient({
  link: new HttpLink({
    uri: 'https://dnd-char-creator.hasura.app/v1/graphql',
    //   headers: {
    //     Authorization: `Bearer ${authToken}`
    //   }
  }),
  cache: new InMemoryCache(),
});

export default createApolloClient;
