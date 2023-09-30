import { Presenter } from '@/src/app/components/presenter';
import { useContainer } from './useContainer';

export const Container = async () => {
  const { perspectives } = await useContainer();
  return <Presenter perspectives={perspectives} />;
};
