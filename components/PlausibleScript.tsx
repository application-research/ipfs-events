import Script from 'next/script';

export default function PlausibleScript() {
  return <Script defer data-domain="ipfsevents.io" src="https://plausible.io/js/script.outbound-links.js" />;
}
