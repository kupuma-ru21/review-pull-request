import { css } from '@/styled-system/css';
import getClient from '@/src/client';
import { TodosDocument } from './todos.generated';
import ApolloWrapper from './apollo-wrapper';

const Home = async () => {
  const { data } = await getClient().query({ query: TodosDocument });
  return (
    <ApolloWrapper>
      {data.todos.map((todo: { readonly id: string; }) => (
        <div
          className={css({ fontSize: '6xl', fontWeight: 'bold' })}
        >
          {todo.id}
        </div>
      ))}
    </ApolloWrapper>
  );
};

export default Home;
