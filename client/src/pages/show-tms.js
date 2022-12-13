import { MainLayout } from 'layouts';
import { getPageData } from 'data';
import { ResourceContent } from 'components/content';

const ShowTMs = () => {
  const data = getPageData('show-tms');

  return (
    <MainLayout>
      <ResourceContent contentData={data} />
    </MainLayout>
  );
};

export default ShowTMs;
