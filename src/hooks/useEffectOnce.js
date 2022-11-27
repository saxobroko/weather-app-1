import React from 'react';

export const useEffectOnce = (callback, deps) => {
  const hasRunOnce = React.useRef(false);
  React.useEffect(() => {
    if (!hasRunOnce.current) {
      callback();
      hasRunOnce.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);
};
