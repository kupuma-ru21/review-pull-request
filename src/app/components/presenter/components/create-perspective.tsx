'use client';

import {
  type Input, minLength, object, string, maxLength,
} from 'valibot';
import { css } from '@/styled-system/css';
import { useForm } from 'react-hook-form';
import { useCallback, type SyntheticEvent } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';

const DOM_ID = 'perspective';
const MIN_LENGTH_PERSPECTIVE = 1;
const MAX_LENGTH_PERSPECTIVE = 50;

function handleSubmitHelperFunction<T>(onPromise: (event: SyntheticEvent) => Promise<T>) {
  return (event: SyntheticEvent) => {
    onPromise(event).catch(() => {
      // TODO: handling
    });
  };
}

const Schema = object({
  [DOM_ID]: string('perspective must be a string.', [
    minLength(MIN_LENGTH_PERSPECTIVE, 'Please enter perspective.'),
    maxLength(MAX_LENGTH_PERSPECTIVE, 'Please make sure perspective is less than or 50 characters.'),
  ]),
});

const CreatePerspective = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<Input<typeof Schema>>(
    {
      resolver: valibotResolver(Schema),
      defaultValues: { perspective: '' },
    },
  );
  const submit = useCallback(() => {
    // TODO: handling
  }, []);

  const errorInfo = errors[DOM_ID];

  return (
    <form onSubmit={handleSubmitHelperFunction(handleSubmit(submit))}>
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
