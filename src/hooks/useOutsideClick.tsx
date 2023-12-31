import { RefObject, useEffect } from 'react';

export default function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const element = ref.current;
      // do nothing if the click is on the current element or its children
      if (element && !element.contains(e.target as Node)) {
        callback();
      }
    };

    document.body.addEventListener('click', listener);

    return () => document.body.removeEventListener('click', listener);
  }, [callback, ref]);
  return <div>useOutsideClick</div>;
}
