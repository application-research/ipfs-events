import PlausibleScript from '@root/components/PlausibleScript';

import DefaultMetaTags from '@components/DefaultMetaTags';

export default async function Head({ params }) {
  return (
    <>
      <DefaultMetaTags />
      <PlausibleScript />
    </>
  );
}
