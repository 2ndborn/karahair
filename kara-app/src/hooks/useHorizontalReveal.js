import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useHorizontalReveal(margin = '0px -30% 0px -30%', threshold = 0.2) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin,
    threshold,
    amount: 'some',
  });

  return { ref, inView };
}