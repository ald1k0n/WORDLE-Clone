import { FC, MouseEvent } from "react";
import KeyCell from "./KeyCell";

const keyboard = [
  "й",
  "ц",
  "у",
  "к",
  "е",
  "н",
  "г",
  "ш",
  "щ",
  "з",
  "ф",
  "ы",
  "в",
  "а",
  "п",
  "р",
  "о",
  "л",
  "д",
  "ж",
  "э",
  "я",
  "Erase",
  "ч",
  "с",
  "м",
  "и",
  "т",
  "ь",
  "б",
  "ю",
  "enter",
];

type Props = {
  EraseTheLetter: () => void;
  handleWin: () => void;
  handleRow: () => void;
  handleLetter: (letter: string) => void;
};

export const Keyboard: FC<Props> = ({
  EraseTheLetter,
  handleWin,
  handleRow,
  handleLetter,
}) => {
  const handleKeys = (event: MouseEvent<HTMLElement>) => {
    //@ts-ignore
    const letter: string = event.target.value as string;
    if (letter === "Erase") {
      EraseTheLetter();
    } else if (letter.length === 5 && letter === "enter") {
      handleWin();
      handleRow();
    } else if (letter.length < 2 && letter.length < 5) {
      handleLetter(letter.toUpperCase());
    } else {
      return;
    }
  };

  return (
    <div className=" w-full mt-2 md:mt-12 justify-center flex-wrap gap-0.5 md:gap-1.5 flex px-2">
      {keyboard.map((key) => {
        return <KeyCell onClick={handleKeys} key={key} letter={key} />;
      })}
    </div>
  );
};
