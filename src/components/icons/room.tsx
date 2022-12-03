import * as React from 'react';
import { SVGProps } from 'react';

const RoomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m13.526 2.504.125.021 10.625 2.5a.938.938 0 0 1 .715.784l.009.128v18.125a.937.937 0 0 1-.6.875l-.122.038-10.625 2.5a.939.939 0 0 1-1.144-.785l-.009-.128V3.438a.938.938 0 0 1 .904-.937l.122.004Zm.849 2.117V25.38l8.75-2.059V6.68l-8.75-2.059ZM11.25 5v1.875H6.875v16.25h4.375V25H5.937a.937.937 0 0 1-.928-.81L5 24.062V5.938a.937.937 0 0 1 .81-.928L5.938 5h5.312Zm6.25 8.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
      fill="#97826D"
    />
  </svg>
);

export default RoomIcon;
