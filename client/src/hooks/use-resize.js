import { useEffect, useState } from 'react';

const useResize = () => {
  const [resize, setResize] = useState({
    innerWidth: window.innerWidth,
  });

  const resizeHandler = () => {
    setResize({
      innerWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return resize;
};

export default useResize;
