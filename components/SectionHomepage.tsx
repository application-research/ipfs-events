import GutterContainer from './GutterContainer';
import Hero from './Hero';

export default function SectionHomepage({ hero }) {
  console.log('hero', hero.title);

  return (
    <div style={{ background: 'var(--color-white200)' }}>
      <Hero {...hero} />

      <h1>Sponsors</h1>
      <h1>Participating Teams</h1>
      <h1>Schedule</h1>
      <h1>Ticketing</h1>
    </div>
  );
}
