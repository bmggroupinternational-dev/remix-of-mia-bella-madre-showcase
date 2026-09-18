import { useId } from "react";

type HibiscusOutlineProps = {
  className?: string;
};

export function HibiscusOutline({ className = "" }: HibiscusOutlineProps) {
  const maskId = useId();

  return (
    <svg
      viewBox="0 0 220 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          <rect width="220" height="240" fill="white" />
          <path
            d="M105 151 72 111l23 18-14-30 27 35M112 149l23-54-4 30 28-30-19 39 31-20-39 39M115 157l56 12-32 2 36 22-45-14 21 29-37-39M105 158l-17 56 3-34-24 35 14-45-29 25 38-42M100 154l-54 14 30-18-39 5 46-21-31 1 45 10"
            fill="none"
            stroke="black"
            strokeWidth="8"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`} fill="currentColor">
        <path d="M107 153C96 130 78 91 50 76c-13-7-28-5-34 6-4 7-3 15 2 22-9 10-5 25 6 36 18 19 49 26 78 20l11-3-6-4Z" />
        <path d="M111 153c0-31 6-72 31-95 17-17 47-17 57-2 4 6 5 13 3 20 17 2 23 19 16 34-9 22-43 35-89 48l-18-5Z" />
        <path d="M112 157c28-12 68-15 90 1 16 11 16 30 2 39-2 20-24 29-44 19-20-9-34-30-48-53v-6Z" />
        <path d="M106 158c15 27 20 64 2 77-10 8-24 5-30-5-14 8-30-1-34-16-6-23 17-47 56-60l6 4Z" />
        <path d="M101 153c-29 2-66 13-82 35-11 15-5 32 9 37 3 17 22 22 36 12 19-13 29-43 42-76l-5-8Z" />
        <path d="m108 137 7 11 14 2-10 10 3 14-14-6-13 7 2-15-11-9 15-3 7-11Z" />
      </g>

      <path
        d="M109 154C107 112 99 73 82 48 67 26 47 18 26 14"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M83 49 70 36M72 35l-14 1M91 65l8-16M98 49l-1-13M62 29 52 19M48 21l-13-3M79 42l2-17"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <circle cx="24" cy="14" r="6" fill="currentColor" />
      <circle cx="34" cy="31" r="4.5" fill="currentColor" />
      <circle cx="52" cy="19" r="4" fill="currentColor" />
      <circle cx="64" cy="42" r="3.5" fill="currentColor" />
      <circle cx="80" cy="24" r="5.5" fill="currentColor" />
      <circle cx="97" cy="35" r="4.5" fill="currentColor" />
    </svg>
  );
}