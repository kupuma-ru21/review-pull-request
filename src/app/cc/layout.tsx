import ApolloWrapper from './apollo-wrapper';

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const Layout = ({ children }: {
  children: React.ReactNode
}) => <ApolloWrapper>{children}</ApolloWrapper>;

export default Layout;
