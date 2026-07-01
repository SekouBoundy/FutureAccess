export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="11" fill="#0A2540" />
      <path d="M20 8L31 13.5L20 19L9 13.5L20 8Z" fill="#D8B23E" />
      <path
        d="M14 17.5V23C14 23 16.5 26 20 26C23.5 26 26 23 26 23V17.5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M31 13.5V20" stroke="#D8B23E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
