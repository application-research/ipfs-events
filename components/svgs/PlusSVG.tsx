export default function PlusSVG({ className, ...props }) {
  return (
    <svg className={className} {...props} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="13.5" x2="13.5" y2="27" stroke="white" stroke-width="3" />
      <line y1="13.0332" x2="27" y2="13.0332" stroke="white" stroke-width="3" />
    </svg>
  );
}
