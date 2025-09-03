'use client';
import { useEffect } from 'react';

export default function V0BadgeKiller() {
  useEffect(() => {
    const remove = () => {
      document
        .querySelectorAll('div[id^="v0-built-with-button"]')
        .forEach((el) => el.remove());
    };
    remove(); // initial
    const mo = new MutationObserver(remove);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);
  return null;
}
