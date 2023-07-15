import { Fragment } from "react";

type Data = { word: string; row: number };

type Props = {
  data: Data[];
  word: string;
  guessedWord: string;
  row: number;
};

export const WordCells = (props: Props) => {
  return (
    <section className="flex w-full mt-1 md:px-12 justify-center items-center flex-wrap gap-2">
      {new Array(5).fill(0).map((_, row) => {
        return (
          <Fragment key={row + 1}>
            {new Array(5).fill(0).map((__, column) => {
              const isMatch = props.guessedWord.includes(
                props.data[row]?.word[column]
              );
              const styles = {
                true: "bg-orange-200",
                false: "bg-slate-200",
              } as {
                true: string;
                false: string;
              };

              return (
                <div
                  key={column + 1}
                  className={`w-16 h-20 ${
                    //@ts-ignore
                    styles[isMatch.toString()]
                  } text-xl font-bold rounded-sm flex justify-center items-center`}
                >
                  <>
                    {props.data[row]?.row - 1 === row &&
                    props.data[row]?.word.length > 0
                      ? props.data[row]?.word[column]
                      : props.row - 1 === row && props.word[column]
                      ? props.word[column]
                      : ""}
                  </>
                </div>
              );
            })}
          </Fragment>
        );
      })}
    </section>
  );
};
