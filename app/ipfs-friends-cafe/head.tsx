import DefaultMetaTags from '@components/DefaultMetaTags';
import PlausibleScript from '@root/components/PlausibleScript';

export default async function Head({ params }) {
  return (
    <>
      <DefaultMetaTags />
      <PlausibleScript />
    </>
  );
}
