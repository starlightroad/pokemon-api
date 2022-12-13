import { MainLayout } from 'layouts';
import { getPageData } from 'data';
import { ResourceContent } from 'components/content';

const ShowATM = () => {
  const data = getPageData('show-a-tm');

  return (
    <MainLayout>
      <ResourceContent contentData={data} />
    </MainLayout>
  );
};

export default ShowATM;
