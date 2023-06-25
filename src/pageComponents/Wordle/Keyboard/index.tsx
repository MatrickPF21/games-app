import React from "react";
import Letter from "../Letter";

const FIRST_ROW_KEYS = "qwertyuiop".split("");
const SECOND_ROW_KEYS = "asdfghjklñ".split("");
const THIRD_ROW_KEYS = "zxcvbnm".split("");

interface KeyboardProps {
  word: string;
  guessedWords: string[];
  currentGuess: number;
}

interface Obj {
  correct: string[];
  close: string[];
}

export default function Keyboard({
  guessedWords,
  word,
  currentGuess,
}: KeyboardProps) {
  const letters = React.useMemo(() => {
    if (currentGuess === 0)
      return {
        correct: [],
        close: [],
      };

    const obj: Obj = {
      correct: [],
      close: [],
    };

    guessedWords.forEach((w, idx) => {
      if (idx >= currentGuess) return;

      w.split("").forEach((letter, index) => {
        if (letter === word[index]) {
          obj.correct.push(letter);
          return;
        }

        if (word.includes(letter)) obj.close.push(letter);
      });
    });

    return obj;
  }, [guessedWords, word, currentGuess]);

  return (
    <div className=''>
      <ul className='flex flex-col items-center gap-1'>
        <li className='flex gap-2'>
          {FIRST_ROW_KEYS.map((key, index) => (
            <Letter
              key={index}
              isCloseLetter={letters.close.includes(key)}
              isCorrectLetter={letters.correct.includes(key)}
              pressedLetter={key}
              reveal={true}
              className='h-12 w-8 rounded-lg text-xl'
            />
          ))}
        </li>
        <li className='flex gap-2'>
          {SECOND_ROW_KEYS.map((key, index) => (
            <Letter
              key={index}
              isCloseLetter={letters.close.includes(key)}
              isCorrectLetter={letters.correct.includes(key)}
              pressedLetter={key}
              reveal={true}
              className='h-12 w-8 rounded-lg text-xl'
            />
          ))}
        </li>
        <li className='flex gap-2'>
          {THIRD_ROW_KEYS.map((key, index) => (
            <Letter
              key={index}
              isCloseLetter={letters.close.includes(key)}
              isCorrectLetter={letters.correct.includes(key)}
              pressedLetter={key}
              reveal={true}
              className='h-12 w-8 rounded-lg text-xl'
            />
          ))}
        </li>
      </ul>
    </div>
  );
}
