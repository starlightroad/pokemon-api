import { MainLayout } from 'layouts';
import { getPageData } from 'data';
import { ResourceContent } from 'components/content';

const ShowMovesPage = () => {
  const data = getPageData('show-moves');

  return (
    <MainLayout>
      <ResourceContent contentData={data} />
    </MainLayout>
  );
};

export default ShowMovesPage;
