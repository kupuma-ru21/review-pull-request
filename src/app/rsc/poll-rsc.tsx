'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';
import { AnswerPollDocument } from '@/src/components/poll/documents.generated';
import { Poll as PollInner } from '@/src/components/poll';

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const Poll = ({
  poll,
}: {
  poll: {
    answers: {
      id: string;
      percentage: number;
      text: string;
      votes: number;
    }[];
    id: string;
    question: string;
    totalVotes: number;
  };
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const isShowResults = useSearchParams().get('results') === 'true';

  const [isLoading, setIsLoading] = useState(false);

  const [mutate] = useMutation(AnswerPollDocument);

  const handleClick = useCallback(
    async (answerId: string) => {
      setIsLoading(true);

      await mutate({
        variables: { pollId: poll.id, answerId },
      });

      router.push(`${pathname}?results=true`);

      // this doesn't wait for the page to be reloaded
      // but it's fine for this demo
      setIsLoading(false);
    },
    [mutate, poll.id, router, pathname],
  );

  return (
    <PollInner
      isLoading={isLoading}
      isShowResults={isShowResults}
      onClick={handleClick}
      poll={poll}
    />
  );
};

export default Poll;
