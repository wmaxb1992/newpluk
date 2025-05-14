import React, { ReactNode, useMemo } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider as BaseApolloProvider, HttpLink, ApolloLink } from '@apollo/client';
import { Auth } from 'aws-amplify';

interface ApolloProviderProps {
  children: ReactNode;
  graphqlEndpoint: string;
  region: string;
}

// Create a simple auth link that adds the JWT token to the request headers
const createSimpleAuthLink = (region: string) => {
  return new ApolloLink((operation, forward) => {
    return forward(operation).map(response => {
      // First try to get the session
      return Auth.currentSession()
        .then((session: any) => {
          // If we have a session, add the token to the headers
          const token = session.getIdToken().getJwtToken();
          operation.setContext({
            headers: {
              Authorization: token
            }
          });
          return response;
        })
        .catch(() => {
          // If there's no session, just return the response as is
          return response;
        });
    });
  });
};

export const ApolloProvider: React.FC<ApolloProviderProps> = ({ 
  children, 
  graphqlEndpoint,
  region
}) => {
  const client = useMemo(() => {
    // HTTP link for standard GraphQL queries and mutations
    const httpLink = new HttpLink({
      uri: graphqlEndpoint,
    });

    // Create a simple auth link
    const authLink = createSimpleAuthLink(region);

    // Create the Apollo Client with a simple link chain
    return new ApolloClient({
      link: ApolloLink.from([authLink, httpLink]),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
          errorPolicy: 'all',
        },
        query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all',
        },
        mutate: {
          errorPolicy: 'all',
        },
      },
    });
  }, [graphqlEndpoint, region]);

  return <BaseApolloProvider client={client}>{children}</BaseApolloProvider>;
};
