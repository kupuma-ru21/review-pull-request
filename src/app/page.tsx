import { css } from '@/styled-system/css';
import { TodosDocument } from './todos.generated';
import getClient from './client';

const Home = async () => {
  const { data } = await getClient().query({ query: TodosDocument });
  return data.todos.map(
    (todo: { readonly id: string; }) => (
      <div
        className={css({ fontSize: '6xl', fontWeight: 'bold' })}
      >
        {todo.id}
      </div>
    ),
  );
};

export default Home;
