import { FC } from "react";

type Props = {
  letter: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const KeyCell: FC<Props> = (props) => {
  return (
    <button
      className="flex-1 rounded uppercase font-bold  md:!py-1 px-2 md:px-3  h-14 small:h-12 text-xs bg-gray-300"
      value={props.letter}
      {...props}
    >
      {props.letter}
    </button>
  );
};

export default KeyCell;
