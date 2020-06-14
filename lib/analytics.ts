// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const trackPageView = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
    page_path: url,
  });
};

interface TrackEventProps {
  action: string;
  category: string;
  label?: string;
  value?: string | number;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const trackEvent = ({ action, category, label, value }: TrackEventProps) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
