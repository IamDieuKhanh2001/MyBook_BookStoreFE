import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const usePathName = () => {
  const router = useRouter();
  const [pathname, setPathname] = useState(router.pathname);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setPathname(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return pathname;
};

export default usePathName;
