import { MainLayout } from 'layouts';
import { getPageData } from 'data';
import { ResourceContent } from 'components/content';

const ShowAnHM = () => {
  const data = getPageData('show-an-hm');

  return (
    <MainLayout>
      <ResourceContent contentData={data} />
    </MainLayout>
  );
};

export default ShowAnHM;
