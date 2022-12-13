import { Link } from 'react-router-dom';

import { Navbar, NotFoundLayout } from 'layouts';
import { Button, Typography } from 'components/ui';
import { getPageData } from 'data';

const NotFoundPage = () => {
  const data = getPageData('not-found');
  const {
    message,
    button: { text, link },
  } = data;

  return (
    <>
      <Navbar />
      <NotFoundLayout>
        <Typography variant="h1">{message}</Typography>
        <Link to={link}>
          <Button>{text}</Button>
        </Link>
      </NotFoundLayout>
    </>
  );
};

export default NotFoundPage;
