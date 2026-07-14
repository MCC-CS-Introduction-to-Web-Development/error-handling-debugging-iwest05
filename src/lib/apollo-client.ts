import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const graphqlZeroHttpLink = new HttpLink({
    uri: "https://graphqlzero.almansi.me/api",
});

export const apolloClient = new ApolloClient({
    link: graphqlZeroHttpLink,
    cache: new InMemoryCache(),
});
