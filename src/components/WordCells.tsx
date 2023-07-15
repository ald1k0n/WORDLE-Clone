import { Fragment } from "react";

type Data = { word: string; row: number };

type Props = {
  data: Data[];
  word: string;
  guessedWord: string;
  row: number;
};

const styles = {
  match: "bg-green-400",
  exist: "bg-orange-200",
  notExist: "bg-slate-200",
};

export const WordCells = (props: Props) => {
  return (
    <section className="flex w-full mt-1 md:px-12 justify-center items-center flex-wrap gap-2">
      {new Array(5).fill(0).map((_, row) => {
        return (
          <Fragment key={row + 1}>
            {new Array(5).fill(0).map((__, column) => {
              const isIndex = props.guessedWord.indexOf(
                props.data[row]?.word[column]
              );

              return (
                <div
                  key={column + 1}
                  className={`w-16 h-20 ${
                    isIndex === column
                      ? styles["match"]
                      : isIndex !== -1
                      ? styles["exist"]
                      : styles["notExist"]
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
