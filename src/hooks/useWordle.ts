import React from "react";
import words from "@/data/word.json";

const TRIES = 6;
const keys = "abcdefghijklmnñopqrstuvwxyz".split("");

export function useWordle() {
  const [word] = React.useState(
    // words[Math.floor(Math.random() * words.length)]
    "fines"
  );
  const [guessedWords, setGuessedWords] = React.useState<string[]>(
    Array(TRIES).fill("")
  );
  const [currentGuess, setCurrentGuess] = React.useState<number>(0);
  const [win, setWin] = React.useState<boolean>(false);
  const [lose, setLose] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleListener = (e: KeyboardEvent) => {
      if (win || lose) return;
      if (currentGuess >= TRIES) return;

      if (keys.includes(e.key.toLowerCase())) {
        if (guessedWords[currentGuess].length >= 5) return;

        setGuessedWords(prev =>
          prev.map((word, idx) =>
            currentGuess === idx ? word + e.key.toLowerCase() : word
          )
        );
      } else if (e.key === "Backspace") {
        setGuessedWords(prev =>
          prev.map((word, idx) =>
            currentGuess === idx ? word.slice(0, -1) : word
          )
        );
      } else if (e.key === "Enter") {
        if (guessedWords[currentGuess].length !== 5) return;

        const haveGuessed = !!guessedWords.find(
          w => w.toLowerCase() === word.toLowerCase()
        );
        const didLose = !guessedWords.some(w => !!w) && !haveGuessed;

        if (didLose) {
          setLose(true);
        }

        if (haveGuessed) {
          setWin(true);
        }

        setCurrentGuess(prev => prev + 1);
      }
    };

    document.addEventListener("keydown", handleListener);

    return () => {
      document.removeEventListener("keydown", handleListener);
    };
  }, [currentGuess, guessedWords, word, win, lose]);

  return {
    guessedWords,
    currentGuess,
    word,
    win,
    lose,
  };
}
