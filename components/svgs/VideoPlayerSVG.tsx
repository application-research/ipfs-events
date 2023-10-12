export default function VideoPlayerSVG({ className, stroke, ...props }: any): any {
  return (
    <svg className={className} {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.259 8.72897C7.93418 8.5772 7.55579 8.59325 7.245 8.77197C6.94003 8.94134 6.74921 9.26115 6.745 9.60997V14.39C6.74983 14.7386 6.94048 15.0581 7.245 15.228C7.55605 15.407 7.93491 15.4231 8.26 15.271L12.745 13.153C13.2035 12.9529 13.4998 12.5002 13.4998 12C13.4998 11.4997 13.2035 11.047 12.745 10.847L8.259 8.72897Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.75 6.375C0.75 4.71815 2.09315 3.375 3.75 3.375H20.25C21.9069 3.375 23.25 4.71815 23.25 6.375V17.625C23.25 19.2819 21.9069 20.625 20.25 20.625H3.75C2.09315 20.625 0.75 19.2819 0.75 17.625V6.375Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M18.75 20.625V3.375" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}
