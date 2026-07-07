import * as React from "react";
import { SVGProps } from "react";
const StarIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={21}
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#clip0_5377_652)">
            <mask
                id="mask0_5377_652"
                style={{
                    maskType: "luminance",
                }}
                maskUnits="userSpaceOnUse"
                x={-1}
                y={0}
                width={22}
                height={21}
            >
                <path d="M20.2782 0H-0.277344V20.5556H20.2782V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_5377_652)">
                <path
                    d="M8.05556 0C8.32904 4.47997 11.7804 8.05043 16.1111 8.33333C11.7804 8.61625 8.32904 12.1867 8.05556 16.6667C7.78208 12.1867 4.33063 8.61625 0 8.33333C4.33063 8.05043 7.78208 4.47997 8.05556 0Z"
                    fill="#2563EB"
                />
            </g>
            <mask
                id="mask1_5377_652"
                style={{
                    maskType: "luminance",
                }}
                maskUnits="userSpaceOnUse"
                x={11}
                y={12}
                width={9}
                height={9}
            >
                <path
                    d="M19.9982 12.2227H11.8164V20.556H19.9982V12.2227Z"
                    fill="white"
                />
            </mask>
            <g mask="url(#mask1_5377_652)">
                <path
                    d="M15.9073 12.2227C16.0462 14.4626 17.799 16.2479 19.9982 16.3893C17.799 16.5308 16.0462 18.316 15.9073 20.556C15.7684 18.316 14.0157 16.5308 11.8164 16.3893C14.0157 16.2479 15.7684 14.4626 15.9073 12.2227Z"
                    fill="#2563EB"
                />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_5377_652">
                <rect width={20} height={20.5556} fill="white" />
            </clipPath>
        </defs>
    </svg>
);
export default StarIcon;
