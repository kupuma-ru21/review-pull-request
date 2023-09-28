'use client';

/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import {
  type Input, minLength, object, string, maxLength,
} from 'valibot';
import { css } from '@/styled-system/css';
import { useForm, valiForm } from '@modular-forms/react';
import { useCallback } from 'react';

const DOM_ID = 'create-perspective';
const MIN_LENGTH_PERSPECTIVE = 1;
const MAX_LENGTH_PERSPECTIVE = 50;

const Schema = object({
  perspective: string('perspective must be a string.', [
    minLength(MIN_LENGTH_PERSPECTIVE, 'Please enter perspective.'),
    maxLength(MAX_LENGTH_PERSPECTIVE, 'Please make sure perspective is less than or 50 characters.'),
  ]),
});

const CreatePerspective = () => {
  const [{ invalid }, { Form, Field }] = useForm<Input<typeof Schema>>(
    { validate: valiForm(Schema) },
  );
  const createPerspective = useCallback(() => {
  }, []);

  return (
    <Form onSubmit={createPerspective}>
      <Field name="perspective">
        {(field, props) => (
          <label className={css({ fontWeight: 'bold', cursor: 'pointer' })} htmlFor={DOM_ID}>
            create perspective
            <input
              {...props}
              id={DOM_ID}
              name={DOM_ID}
              type="text"
              className={css({
                borderColor: 'Highlight', borderWidth: 'medium', borderRadius: 'md', ml: '1.5', width: 'xl',
              })}
            />
            <p className={css({ color: 'red.500', mb: '1.5' })}>{field.error}</p>
            {/* TODO: add preview ui for input */}
          </label>
        )}
      </Field>
      <button
        // https://github.com/fabian-hiller/modular-forms/issues/104
        disabled={invalid.value}
        type="submit"
        className={css({
          ml: '1.5', bgColor: 'blue.300', padding: 1, borderRadius: '8px', cursor: 'pointer',
        })}
      >
        create
      </button>
    </Form>
  );
};

export default CreatePerspective;
