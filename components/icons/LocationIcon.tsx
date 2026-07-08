import * as React from "react";
const LocationIcon = (props: any) => (
    <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#clip0_5304_1171)">
            <path
                d="M16 0C10.3772 0 5.6875 4.52938 5.6875 10.3125C5.6875 12.5126 6.34862 14.4745 7.61744 16.3129L15.2108 28.1616C15.5792 28.7376 16.4216 28.7365 16.7892 28.1616L24.4155 16.2726C25.657 14.5175 26.3125 12.4567 26.3125 10.3125C26.3125 4.62619 21.6863 0 16 0ZM16 15C13.4154 15 11.3125 12.8971 11.3125 10.3125C11.3125 7.72794 13.4154 5.625 16 5.625C18.5846 5.625 20.6875 7.72794 20.6875 10.3125C20.6875 12.8971 18.5846 15 16 15Z"
                fill="url(#paint0_linear_5304_1171)"
            />
            <path
                d="M23.329 21.543L18.6083 28.9234C17.3864 30.8285 14.6068 30.8223 13.3907 28.9252L8.66238 21.5449C4.50213 22.5068 1.9375 24.2688 1.9375 26.3745C1.9375 30.0284 9.183 31.9995 16 31.9995C22.817 31.9995 30.0625 30.0284 30.0625 26.3745C30.0625 24.2673 27.4943 22.5043 23.329 21.543Z"
                fill="url(#paint1_linear_5304_1171)"
            />
        </g>
        <defs>
            <linearGradient
                id="paint0_linear_5304_1171"
                x1={5.6875}
                y1={0}
                x2={30.2766}
                y2={24.6368}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#0A206D" />
                <stop offset={1} stopColor="#3B69D0" />
            </linearGradient>
            <linearGradient
                id="paint1_linear_5304_1171"
                x1={1.9375}
                y1={21.543}
                x2={6.42944}
                y2={38.3252}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#0A206D" />
                <stop offset={1} stopColor="#3B69D0" />
            </linearGradient>
            <clipPath id="clip0_5304_1171">
                <rect width={32} height={32} fill="white" />
            </clipPath>
        </defs>
    </svg>
);
export default LocationIcon;
