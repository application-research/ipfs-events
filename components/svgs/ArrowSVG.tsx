export default function ArrowSVG(props, color) {
  return (
    <svg {...props} viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 8L27 8" stroke={props.color ?? 'var(--textBlack)'} stroke-width="2" stroke-linecap="round" />
      <path d="M20 1L27 8" stroke={props.color ?? 'var(--textBlack)'} stroke-width="2" stroke-linecap="round" />
      <path d="M20 15L27 8" stroke={props.color ?? 'var(--textBlack)'} stroke-width="2" stroke-linecap="round" />
    </svg>
  );
}
