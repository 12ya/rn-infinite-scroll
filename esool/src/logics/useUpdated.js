import { useEffect, useRef } from 'react';

export const useUpdatedEffect = (callback, dependencies) => {
    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        callback();
    }, dependencies);
};
