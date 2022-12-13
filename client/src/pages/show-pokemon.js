import { MainLayout } from 'layouts';
import { getPageData } from 'data';
import { ResourceContent } from 'components/content';

const ShowPokemonPage = () => {
  const data = getPageData('show-pokemon');

  return (
    <MainLayout>
      <ResourceContent contentData={data} />
    </MainLayout>
  );
};

export default ShowPokemonPage;
