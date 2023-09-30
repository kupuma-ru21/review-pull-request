'use client';

import {
  type Input as InputBase, minLength, object, string, maxLength,
} from 'valibot';
import { css } from '@/styled-system/css';
import { useCallback } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';
import type { SubmitHandler } from 'react-hook-form';
import rhf from '@/lib/react-hook-form';

const DOM_ID = 'perspective';
const MIN_LENGTH_PERSPECTIVE = 1;
const MAX_LENGTH_PERSPECTIVE = 50;

const Schema = object({
  [DOM_ID]: string('perspective must be a string.', [
    minLength(MIN_LENGTH_PERSPECTIVE, 'Please enter perspective.'),
    maxLength(MAX_LENGTH_PERSPECTIVE, 'Please make sure perspective is less than or 50 characters.'),
  ]),
});

type Input = InputBase<typeof Schema>;

const CreatePerspective = () => {
  const {
    register, handleSubmit, formState: { errors, isValid },
  } = rhf.useForm<Input>(
    {
      resolver: valibotResolver(Schema),
      defaultValues: { perspective: '' },
    },
  );

  const submit: SubmitHandler<Input> = useCallback(() => {
  }, []);

  const errorInfo = errors[DOM_ID];

  return (
    <form onSubmit={handleSubmit(submit)}>
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
