import DefaultMetaTags from '@components/DefaultMetaTags';
import PlausibleScript from '@root/components/PlausibleScript';

export default async function Head({ params }) {
  const title = 'IPFS.Events';
  const description =
    "Welcome to IPFS Events: IPFS powers the Distributed Web & we’re powering their events! IPFS is a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open.";
  const url = 'https://ipfsevents.io';

  // SUMMARY_LARGE_IMAGE: 1500x785
  return (
    <>
      <title>{title}</title>
      <DefaultMetaTags />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="" />
      <PlausibleScript />
    </>
  );
}
