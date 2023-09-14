import { useState, useEffect } from 'react';

import { SPLASH_TIME } from 'constants/splash-time';

type UseBootstrapAppReturnType = {
  isAppReady: boolean;
};

const useBootstrapApp = (): UseBootstrapAppReturnType => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAppReady(true), SPLASH_TIME);
    return () => clearTimeout(timer);
  }, []);

  return {
    isAppReady,
  };
};

export default useBootstrapApp;
