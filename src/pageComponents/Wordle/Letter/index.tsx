import { twMerge } from "tailwind-merge";

interface LetterProps {
  pressedLetter: string;
  isCorrectLetter: boolean;
  isCloseLetter: boolean;
  reveal: boolean;
  className?: string;
}

export default function Letter({
  pressedLetter,
  isCloseLetter,
  isCorrectLetter,
  reveal,
  className,
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
        `h-12 w-12 border border-gray-500 text-4xl font-bold uppercase ${correctClass} inline-flex items-center justify-center`,
        className
      )}
    >
      <span>{pressedLetter}</span>
    </div>
  );
}
