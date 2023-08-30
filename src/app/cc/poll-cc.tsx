'use client';

import { Suspense } from 'react';
import { useBackgroundQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { GetPollDocument } from '@/src/components/poll/documents.generated';
import Poll from './poll';

const PollWrapper = () => {
  const [queryRef] = useBackgroundQuery(GetPollDocument, {
    variables: { id: '1', delay: 0 },
  });

  return (
    <Suspense fallback={<>Loading...</>}>
      <Poll queryRef={queryRef} />
    </Suspense>
  );
};

export default PollWrapper;
