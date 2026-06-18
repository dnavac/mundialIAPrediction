'use client';

import { useEffect } from 'react';

export default function AdSenseInit() {
  useEffect(() => {
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);

  return null;
}
