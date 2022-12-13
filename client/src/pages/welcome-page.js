import { MainLayout } from 'layouts';
import { getPageData } from 'data';
import { WelcomeContent } from 'components/content';

const WelcomePage = () => {
  const data = getPageData('welcome');

  return (
    <MainLayout>
      <WelcomeContent contentData={data} />
    </MainLayout>
  );
};

export default WelcomePage;
