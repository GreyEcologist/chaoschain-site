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
    id.set('utm_source',   params.get('utm_source'));
    id.set('utm_medium',   params.get('utm_medium'));
    id.set('utm_campaign', params.get('utm_campaign'));
    id.set('utm_content',  params.get('utm_content'));
    amplitude.identify(id);
  }, []);

  return null;
}
