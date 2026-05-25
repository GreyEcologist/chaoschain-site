'use client';
import { useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';

let initialized = false;

export default function AmplitudeAnalytics() {
  useEffect(() => {
    if (initialized) return;
    initialized = true;

    amplitude.init('8baef1d70c5ce068fffbda18281aebab', { autocapture: true });

    const params = new URLSearchParams(window.location.search);
    const id = new amplitude.Identify();
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const;
    for (const key of utmKeys) {
      const val = params.get(key);
      if (val) id.set(key, val);
    }
    amplitude.identify(id);
  }, []);

  return null;
}
