import type { Perspectives } from './types';

const ZERO = 0;

export const hooks = (
  { perspectives }: { perspectives: Perspectives },
) => {
  const hasPerspectives = perspectives.length !== ZERO;
  return { hasPerspectives };
};
