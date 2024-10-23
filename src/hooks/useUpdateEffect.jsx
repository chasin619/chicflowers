import { useEffect, useRef } from "react";

function useUpdateEffect(effect, dependencies) {
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    return effect();
  }, dependencies);
}

export default useUpdateEffect;
