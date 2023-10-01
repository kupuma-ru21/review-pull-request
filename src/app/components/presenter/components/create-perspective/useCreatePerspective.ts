import {
  type Input as InputBase, minLength, object, string, maxLength,
} from 'valibot';
import { useCallback } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { useForm, type SubmitHandler } from '@/lib/react-hook-form';
import { useMutation } from '@apollo/client';
import { DOM_ID } from './constants';
import { CreatePerspectiveDocument } from './graphql/create-perspective.generated';

const MIN_LENGTH_PERSPECTIVE = 1;
const MAX_LENGTH_PERSPECTIVE = 50;

const Schema = object({
  [DOM_ID]: string('perspective must be a string.', [
    minLength(MIN_LENGTH_PERSPECTIVE, 'Please enter perspective.'),
    maxLength(MAX_LENGTH_PERSPECTIVE, 'Please make sure perspective is less than or 50 characters.'),
  ]),
});

type Input = InputBase<typeof Schema>;

export const useCreatePerspective = () => {
  const {
    register, handleSubmit, formState: { errors, isValid },
  } = useForm<Input>(
    {
      resolver: valibotResolver(Schema),
      defaultValues: { perspective: '' },
    },
  );

  const [
    createPerspective, { loading: isCreatingPerspective },
  ] = useMutation(CreatePerspectiveDocument);

  const submit: SubmitHandler<Input> = useCallback(async ({ perspective }) => {
    await createPerspective({ variables: { text: perspective } });
  }, [createPerspective]);

  const errorInfo = errors[DOM_ID];

  return {
    register, submit: handleSubmit(submit), isValid, errorInfo, isCreatingPerspective,
  };
};
