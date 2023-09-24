import getClient from '@/src/client';
import { PerspectivesDocument } from '@/src/app/perspectives.generated';

export default async () => {
  const { data } = await getClient().query({ query: PerspectivesDocument });
  return { perspectives: data.perspectives };
};
