import * as React from 'react';
import { SVGProps } from 'react';

const MapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 17.5c2.758 0 5-2.242 5-5s-2.242-5-5-5-5 2.242-5 5 2.242 5 5 5Zm0-7.5c1.379 0 2.5 1.121 2.5 2.5S16.379 15 15 15a2.503 2.503 0 0 1-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5Z"
      fill="#97826D"
    />
    <path
      d="M14.275 27.267a1.247 1.247 0 0 0 1.45 0C16.105 27 25.036 20.55 25 12.5c0-5.514-4.486-10-10-10S5 6.986 5 12.494c-.036 8.056 8.895 14.505 9.275 14.773ZM15 5c4.136 0 7.5 3.364 7.5 7.506.026 5.548-5.485 10.529-7.5 12.163-2.014-1.635-7.526-6.618-7.5-12.169C7.5 8.364 10.864 5 15 5Z"
      fill="#97826D"
    />
  </svg>
);

export default MapIcon;
