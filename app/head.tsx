import DefaultMetaTags from '@components/DefaultMetaTags';
import PlausibleScript from '@root/components/PlausibleScript';

export default async function Head({ params }) {
  const title = 'Filecoin Dev Summit 2023: Singapore and Iceland';
  const description =
    'Filecoin Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!).';
  const url = 'https://filecoindevsummit.io';

  // SUMMARY_LARGE_IMAGE: 1500x785
  return (
    <>
      <DefaultMetaTags />
      <PlausibleScript />
    </>
  );
}
