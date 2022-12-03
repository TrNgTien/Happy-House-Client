import * as React from 'react';
import { SVGProps } from 'react';

const DownArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.315 16.308a.832.832 0 0 0 1.37 0l7.5-10.834a.833.833 0 0 0-.685-1.307h-15a.835.835 0 0 0-.685 1.307l7.5 10.834Z"
      fill="#FBF7F1"
    />
  </svg>
);

export default DownArrowIcon;
