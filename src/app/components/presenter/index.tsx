import { css } from '@/styled-system/css';
import hooks from './hooks';
import type { Perspectives } from './types';

const Presenter = (
  { perspectives }: { readonly perspectives: Perspectives },
) => {
  const { hasPerspectives } = hooks({ perspectives });
  if (hasPerspectives) {
    return (
      <ul>
        {perspectives.map(
          ({ id, text }) => (
            <li className={css({ mb: '10px' })} key={id}>
              <input
                className={css({ mr: '10px', verticalAlign: 'middle' })}
                id={`${id}`}
                name={`${id}`}
                type="checkbox"
              />
              <label className={css({ fontWeight: 'bold' })} htmlFor={`${id}`}>{text}</label>
            </li>
          ),
        )}
      </ul>
    );
  }
  return <p>add perspectives</p>;
};

export default Presenter;
