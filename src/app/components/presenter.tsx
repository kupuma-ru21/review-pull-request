import { css } from '@/styled-system/css';

const Presenter = (
  { perspectives }: {readonly perspectives: readonly string[]},
) => (
  <ul>
    {perspectives.map(
      (perspective) => (
        <li className={css({ mb: '10px' })} key={perspective}>
          <input
            className={css({ mr: '10px', verticalAlign: 'middle' })}
            id={perspective}
            name={perspective}
            type="checkbox"
          />
          <label className={css({ fontWeight: 'bold' })} htmlFor={perspective}>{perspective}</label>
        </li>
      ),
    )}
  </ul>
);

export default Presenter;
