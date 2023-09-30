'use client';

import { css } from '@/styled-system/css';
import hooks from './hooks';
import { DOM_ID } from './constants';

const CreatePerspective = () => {
  const {
    register, submit, isValid, errorInfo,
  } = hooks();

  return (
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
        {errorInfo ? <p className={css({ color: 'red.500', mb: '1.5' })}>{errorInfo.message}</p> : null}
        {/* TODO: add preview ui for input */}
      </label>
      {/* TODO: fix button position degression when validation error occurs */}
      <button
        disabled={!isValid}
        type="submit"
        className={css({
          ml: '1.5', bgColor: 'blue.300', padding: 1, borderRadius: '8px', cursor: 'pointer',
        })}
      >
        create
      </button>
    </form>
  );
};

export default CreatePerspective;
