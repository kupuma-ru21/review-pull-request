import getClient from '@/src/client';
import { PerspectivesDocument } from '@/src/app/perspectives.generated';
import Presenter from '@/src/app/components/presenter';

const Container = async () => {
  const { data } = await getClient().query({ query: PerspectivesDocument });
  return <Presenter perspectives={data.perspectives} />;
};

export default Container;
