import { useState, useEffect } from 'react';

import { SPLASH_TIME } from 'constants/splash-time';

type UseBootstrapAppOptions = {
  onComplete: () => void | Promise<void>;
};

const useBootstrapApp = (options: UseBootstrapAppOptions) => {
  const [isAppReady, setIsAppReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(
      () =>
        Promise.resolve(options.onComplete())
          .then(() => {
            setIsAppReady(true);
          })
          .catch((reason) => {
            /* eslint-disable no-console */
            console.log(`Reason Is: ${reason}`);
          }),
      SPLASH_TIME,
    );
    return () => clearTimeout(timer);
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
  return { isAppReady };
};

export default useBootstrapApp;
