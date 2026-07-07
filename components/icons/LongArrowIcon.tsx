import * as React from "react";
import { SVGProps } from "react";
const LongArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={55}
        height={15}
        viewBox="0 0 55 15"
        fill="none"
        {...props}
    >
        <path
            d="M54.7071 8.07088C55.0976 7.68036 55.0976 7.04719 54.7071 6.65667L48.3431 0.292706C47.9526 -0.0978185 47.3195 -0.0978185 46.9289 0.292706C46.5384 0.68323 46.5384 1.3164 46.9289 1.70692L52.5858 7.36377L46.9289 13.0206C46.5384 13.4112 46.5384 14.0443 46.9289 14.4348C47.3195 14.8254 47.9526 14.8254 48.3431 14.4348L54.7071 8.07088ZM0 7.36377L-8.74228e-08 8.36377L54 8.36377L54 7.36377L54 6.36377L8.74228e-08 6.36377L0 7.36377Z"
            fill="#030712"
            fillOpacity={0.2}
        />
    </svg>
);
export default LongArrowIcon;
