export default function Text({ id, bigTitle, smallTitle, paragraph }) {
  return (
    <div id={id} style={{ display: 'grid', gap: '1rem' }}>
      <h2 style={{ fontWeight: 'var(--font-weight-light)' }}>{bigTitle}</h2>
      <h4 style={{ fontWeight: 'var(--font-weight-light)' }}>{smallTitle}</h4>
      <p style={{ fontWeight: 'var(--font-weight-light)' }}>{paragraph}</p>
    </div>
  );
}
