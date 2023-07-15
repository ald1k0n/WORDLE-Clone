import { useRef, useEffect, useState } from "react";

import { Header, Keyboard, WordCells } from "./components";
import wordDb from "./fakedb.json";
import { Modal } from "./components/Modal";

const randomWord =
  wordDb[Math.floor(Math.random() * wordDb.length)].toUpperCase();

type Data = { word: string; row: number };

const App = () => {
  const [word, setWord] = useState("");
  const [row, setRow] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState<Data[]>([]);
  const mainRef = useRef<HTMLDivElement>(null);

  const setInitialState = () => {
    const initial = new Array(5).fill(0).map((_, index) => ({
      word: "",
      row: index + 1,
    }));
    setData(initial);
    setRow(1);
  };

  useEffect(() => {
    alert(randomWord);
    mainRef.current?.focus();
    setInitialState();
  }, []);

  useEffect(() => {
    if (row === 6) {
      alert("Проигрыш");
      setInitialState();
    }
  }, [row]);

  const EraseTheLetter = () => {
    setWord((prev) => prev.slice(0, -1));
  };

  const handleRow = () => {
    setRow((prev) => prev + 1);
    const updatedData = [...data];

    const indexOfRow = data.findIndex((d) => d.row === row);

    updatedData[indexOfRow].word = word;

    setData(updatedData);
    setWord("");
  };

  const handleLetter = (letter: string) => {
    setWord((prev) => prev + letter);
  };

  const handleWin = () => {
    if (randomWord === word) {
      alert("Победа");
      setInitialState();
    } else {
      return;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { key, which } = e;
    if (key === "Backspace") {
      EraseTheLetter();
    } else if (word.length === 5 && key === "Enter") {
      handleWin();
      handleRow();
    } else if (key.length < 2 && word.length < 5 && which !== 32) {
      handleLetter(key.toUpperCase());
    } else {
      return;
    }
  };

  const mainClass = "w-full min-h-screen flex justify-center items-center";
  const mainDivClass =
    "focus:outline-none flex-col flex py-2 md:w-[448px] w-full h-screen";

  return (
    <>
      <main className={mainClass}>
        <div
          ref={mainRef}
          className={mainDivClass}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <Header />
          <div className="w-full flex flex-col justify-center h-full">
            <WordCells
              guessedWord={randomWord}
              data={data}
              word={word}
              row={row}
            />
            <Keyboard
              handleLetter={handleLetter}
              handleRow={handleRow}
              handleWin={handleWin}
              EraseTheLetter={EraseTheLetter}
            />
          </div>
        </div>
      </main>
      {isOpen ? (
        <Modal setIsOpen={setIsOpen}>
          <div className="text-lg">
            Данная версия является копией основной{" "}
            <a
              className="underline text-blue-400 hover:text-blue-700"
              href="https://wordle.belousov.one/"
            >
              игры
            </a>
          </div>
          <div className="text-md mt-4 text-slate-500">
            Отличие в том что в оригинале слово разное на сутки. В моей же
            интерпретации слова за хардкожены в JSON и появляются рандомно
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default App;
