import { css } from '@/styled-system/css';
import type { PropsWithChildren } from 'react';

export const Error = ({ children }: PropsWithChildren) => <p className={css({ color: 'red.500', mb: '1.5' })}>{children}</p>;
