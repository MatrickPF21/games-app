import Letter from "../Letter";

export interface RowLettersProps {
  word: string;
  pressedKeys: string[];
  isGuessed: boolean;
}

export default function RowLetters({
  isGuessed,
  pressedKeys,
  word,
}: RowLettersProps) {
  return (
    <li className='flex gap-2'>
      {word.split("").map((letter, index) => (
        <Letter
          pressedLetter={pressedKeys[index]}
          isCorrectLetter={letter === pressedKeys[index]}
          isCloseLetter={word.split("").includes(pressedKeys[index])}
          reveal={isGuessed}
          key={index}
        />
      ))}
    </li>
  );
}
