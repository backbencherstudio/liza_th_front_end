import * as React from "react";
import { SVGProps } from "react";
const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={22}
    viewBox="0 0 17 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.9286 12.2222H6.07143C2.71827 12.2222 0 14.9583 0 18.3333V20.7778C0 21.4528 0.543655 22 1.21429 22H15.7857C16.4563 22 17 21.4528 17 20.7778V18.3333C17 14.9583 14.2817 12.2222 10.9286 12.2222Z"
      fill="url(#paint0_linear_5607_8108)"
    />
    <path
      d="M8.5 9.77778C11.1825 9.77778 13.3571 7.58895 13.3571 4.88889C13.3571 2.18883 11.1825 0 8.5 0C5.81747 0 3.64286 2.18883 3.64286 4.88889C3.64286 7.58895 5.81747 9.77778 8.5 9.77778Z"
      fill="url(#paint1_linear_5607_8108)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5607_8108"
        x1={0}
        y1={0}
        x2={18.8719}
        y2={20.256}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0A206D" />
        <stop offset={1} stopColor="#3B69D0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_5607_8108"
        x1={0}
        y1={0}
        x2={18.8719}
        y2={20.256}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0A206D" />
        <stop offset={1} stopColor="#3B69D0" />
      </linearGradient>
    </defs>
  </svg>
);
export default UserIcon;
