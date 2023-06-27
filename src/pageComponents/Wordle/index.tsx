import MainWrapper from "@/components/MainWrapper";
import RowLetters from "./RowLetters";
import { useWordle } from "@/hooks/useWordle";
import Keyboard from "./Keyboard";
import Toaster from "@/components/ui/toaster";

export default function Wordle() {
  const { currentGuess, guessedWords, word } = useWordle();

  return (
    <MainWrapper>
      <div className='flex h-full flex-col items-center gap-3'>
        <div>
          <h1 className='mb-2 mt-2 text-center text-4xl font-bold text-white'>
            WORDLE
          </h1>
          <div>
            <ul className='grid gap-2'>
              {guessedWords.map((guessedWord, index) => (
                <RowLetters
                  word={word}
                  pressedKeys={guessedWord.split("")}
                  isGuessed={index < currentGuess}
                  key={index}
                />
              ))}
            </ul>
          </div>
        </div>
        <Keyboard
          word={word}
          guessedWords={guessedWords}
          currentGuess={currentGuess}
        />
      </div>
      <Toaster/>
    </MainWrapper>
  );
}
