type HibiscusOutlineProps = {
  className?: string;
};

export function HibiscusOutline({ className = "" }: HibiscusOutlineProps) {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M89 88C65 78 47 58 50 39c3-17 20-24 34-14 9 7 12 22 9 40M89 88c9-25 27-43 45-42 17 1 26 16 18 31-6 12-21 19-41 18M89 88c25 5 45 20 47 38 2 17-12 28-28 22-13-5-22-20-24-40M89 88c-2 25-13 47-31 52-17 5-30-7-27-23 2-14 15-26 34-32M89 88C69 103 44 107 30 96 17 86 20 68 35 61c12-6 29-1 43 12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M89 88c13 8 27 10 42 7M89 88c-9-14-12-28-8-43M89 88c-12 12-19 25-19 41M89 88c-15-3-29-10-39-22M89 88c5 12 15 21 29 27"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M88 89c22 8 35 27 43 46"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M124 127c7 0 14 3 20 8M119 118c6-2 13-1 19 2M111 108c5-3 11-4 17-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="145" cy="137" r="2.4" fill="currentColor" />
      <circle cx="139" cy="132" r="1.8" fill="currentColor" />
      <circle cx="149" cy="132" r="1.7" fill="currentColor" />
    </svg>
  );
}