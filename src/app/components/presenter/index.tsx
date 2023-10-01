import { css } from '@/styled-system/css';
import { usePresenter } from './usePresenter';
import type { Perspectives } from './types';
import { CreatePerspective } from './components/create-perspective';
import { ApolloWrapper } from './components/apollo-wrapper';

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

  // I'm using Apollo Wrapper here too so we can use useMutation in the CreatePerspective component
  return (
    <ApolloWrapper>
      <CreatePerspective />
    </ApolloWrapper>
  );
};
