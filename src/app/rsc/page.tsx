import { GetPollDocument } from '@/src/components/poll/documents.generated';
import { getClient } from './client';
import Poll from './poll-rsc';

const Rsc = async () => {
  const data = await getClient().query({
    query: GetPollDocument,
    variables: { id: '1' },
  });

  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    <Poll poll={data.data.poll!} />
  );
};

export default Rsc;
