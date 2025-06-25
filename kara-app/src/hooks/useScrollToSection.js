import { useCallback } from "react";

import React from 'react'

export const useScrollToSection = () => {
  const scrollTo = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({behavior: "smooth"});
    }
  }, [])
  return scrollTo;
}