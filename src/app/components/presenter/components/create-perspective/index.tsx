'use client';

import { css } from '@/styled-system/css';
import { useCreatePerspective } from './useCreatePerspective';
import { DOM_ID } from './constants';
import { Error } from './components/Error';

export const CreatePerspective = () => {
  const {
    register, submit, isValid, errorInfo, isCreatingPerspective, error,
  } = useCreatePerspective();

  return (
    <>
      <form onSubmit={submit}>
        <label className={css({ fontWeight: 'bold', cursor: 'pointer' })} htmlFor={DOM_ID}>
          create perspective
          <input
            {...register('perspective')}
            id={DOM_ID}
            type="text"
            className={css({
              borderColor: 'Highlight', borderWidth: 'medium', borderRadius: 'md', ml: '1.5', width: 'xl',
            })}
          />
          {errorInfo ? <Error>{errorInfo.message}</Error> : null}
          {/* TODO: add preview ui for input */}
        </label>
        {/* TODO: fix button position degression when validation error occurs */}
        <button
          disabled={!isValid || isCreatingPerspective}
          type="submit"
          className={css({
            ml: '1.5', bgColor: 'blue.300', padding: 1, borderRadius: '8px', cursor: 'pointer',
          })}
        >
          create
        </button>
      </form>
      {/* TODO: create ui for error */}
      {error ? <Error>{error.message}</Error> : null}
    </>
  );
};
