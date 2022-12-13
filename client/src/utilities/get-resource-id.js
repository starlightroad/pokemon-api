import ids from 'data/ids';

const getResourceId = (pathname) => {
  const targetId = (pathname === '/docs' && 'welcome') || pathname.replace('/docs/', '');
  const id = ids.get(targetId) || ids.get('not-found');
  return id;
};

export default getResourceId;
