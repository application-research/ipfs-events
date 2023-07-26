import DefaultMetaTags from '@components/DefaultMetaTags';
import PlausibleScript from '@root/components/PlausibleScript';

export default async function Head({ params }) {
  const title = 'Filecoin Dev Summit';
  const description = 'Filecoin Dev Summit 2023 - Singapore and Iceland ';
  const url = 'https://filecoindevsummit.io';

  // SUMMARY_LARGE_IMAGE: 1500x785
  return (
    <>
      <DefaultMetaTags />
      <PlausibleScript />
    </>
  );
}
