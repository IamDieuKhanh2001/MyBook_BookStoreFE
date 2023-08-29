"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const usePathName = () => {
  const router = useRouter();
  const [currentPathname, setCurrentPathname] = useState(router.pathname);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setCurrentPathname(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return currentPathname;
};

export default usePathName;

