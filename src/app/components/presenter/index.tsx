import { css } from '@/styled-system/css';
import { usePresenter } from './usePresenter';
import type { Perspectives } from './types';
import { CreatePerspective } from './components/create-perspective';

export const Presenter = (
  { perspectives }: { perspectives: Perspectives },
) => {
  const { hasPerspectives } = usePresenter({ perspectives });
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
  return <CreatePerspective />;
};
