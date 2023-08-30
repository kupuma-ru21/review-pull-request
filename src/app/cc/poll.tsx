'use client';

import { useState, useCallback } from 'react';
import { useReadQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { useMutation } from '@apollo/client';
import type { QueryReference } from '@apollo/client/react/cache/QueryReference';
import { Poll as PollInner } from '@/src/components/poll';
import {
  AnswerPollDocument,
  type GetPollQuery,
} from '@/src/components/poll/documents.generated';

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const Poll = ({ queryRef }: { queryRef: QueryReference<GetPollQuery> }) => {
  const { data } = useReadQuery(queryRef);
  const [isShowResults, setIsShowResults] = useState(false);
  const [mutate, { loading: isMutating }] = useMutation(AnswerPollDocument);

  const handleClick = useCallback(
    async (answerId: string) => {
      await mutate({
        variables: { pollId: '1', answerId },
      });

      setIsShowResults(true);
    },
    [mutate],
  );

  return (
    <PollInner
      isLoading={isMutating}
      isShowResults={isShowResults}
      onClick={handleClick}
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      poll={data.poll!}
    />
  );
};

export default Poll;
