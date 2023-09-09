import { css } from '@/styled-system/css';

const Presenter = (
  { todos }: {readonly todos: readonly { readonly id: string }[]},
) => (
  <ul>
    {todos.map(
      (todo: { readonly id: string; }) => (
        <li
          className={css({ fontSize: '6xl', fontWeight: 'bold' })}
        >
          {todo.id}
        </li>
      ),
    )}
  </ul>
);

export default Presenter;
