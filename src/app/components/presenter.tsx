import { css } from '@/styled-system/css';

const Presenter = (
  { perspectives }: {
    readonly perspectives: readonly { readonly id: string, readonly text: string }[]
  },
) => (
  <ul>
    {perspectives.map(
      ({ id, text }) => (
        <li className={css({ mb: '10px' })} key={id}>
          <input
            className={css({ mr: '10px', verticalAlign: 'middle' })}
            id={id}
            name={id}
            type="checkbox"
          />
          <label className={css({ fontWeight: 'bold' })} htmlFor={id}>{text}</label>
        </li>
      ),
    )}
  </ul>
);

export default Presenter;
