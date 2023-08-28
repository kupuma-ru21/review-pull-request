import { css } from '@/styled-system/css';
import { getClient } from './client';
// eslint-disable-next-line no-restricted-imports
import { GetPollDocument } from '../components/poll/documents.generated';

const Home = async () => {
  const data = await getClient().query({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    query: GetPollDocument,
    variables: { id: '1' },
  });
  console.log('data', data);

  return (
    <div className={css({ fontSize: '6xl', fontWeight: 'bold' })}>Home</div>
  );
};

export default Home;
