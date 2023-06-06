export default function Text({ id, bigTitle, smallTitle, paragraph }) {
  return (
    <div id={id}>
      <h2>{bigTitle}</h2>
      <h4>{smallTitle}</h4>
      <p>{paragraph}</p>
    </div>
  );
}
