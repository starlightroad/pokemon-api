import { MainLayout } from 'layouts';
import { getPageData } from 'data';
import { ResourceContent } from 'components/content';

const ShowTop5PokemonPage = () => {
  const data = getPageData('show-top-5-pokemon');

  return (
    <MainLayout>
      <ResourceContent contentData={data} />
    </MainLayout>
  );
};

export default ShowTop5PokemonPage;
