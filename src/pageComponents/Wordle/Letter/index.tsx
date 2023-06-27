import { twMerge } from "tailwind-merge";

interface LetterProps extends React.ComponentProps<"div"> {
  pressedLetter: string;
  isCorrectLetter: boolean;
  isCloseLetter: boolean;
  reveal: boolean;
}

export default function Letter({
  pressedLetter,
  isCloseLetter,
  isCorrectLetter,
  reveal,
  className,
  ...props
}: LetterProps) {
  const correctClass = reveal
    ? isCorrectLetter
      ? "bg-green-500"
      : isCloseLetter
      ? "bg-orange-500"
      : "bg-gray-600"
    : "";

  return (
    <div
      className={twMerge(
        `h-12 w-12 border border-gray-500 text-4xl font-bold uppercase ${correctClass} inline-flex items-center justify-center text-white`,
        className
      )}
      {...props}
    >
      <span>{pressedLetter}</span>
    </div>
  );
}
