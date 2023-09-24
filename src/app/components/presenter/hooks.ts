import type { Perspectives } from './types';

const ZERO = 0;

export default (
  { perspectives }: { readonly perspectives: Perspectives },
) => {
  const hasPerspectives = perspectives.length !== ZERO;
  return { hasPerspectives };
};
