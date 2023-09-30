import { useCallback, type SyntheticEvent } from 'react';
import {
  type FieldValues, useForm as useFormBase, type UseFormProps, type SubmitHandler,
} from 'react-hook-form';

const handleSubmitHelperFunction = <T>(
  onPromise: (event: SyntheticEvent) => Promise<T>,
) => (event: SyntheticEvent) => {
    onPromise(event).catch(() => {
    // TODO: handling
    });
  };

const useForm = <
    TFieldValues extends FieldValues = FieldValues
  >(parameter: UseFormProps<TFieldValues>) => {
  const { handleSubmit: handleSubmitBase, ...rest } = useFormBase(parameter);

  const handleSubmit = useCallback((
    onSubmit: SubmitHandler<TFieldValues>,
  ) => handleSubmitHelperFunction(handleSubmitBase(onSubmit)), [handleSubmitBase]);

  return { ...rest, handleSubmit };
};

export default useForm;
