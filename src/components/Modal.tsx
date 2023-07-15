import { ReactNode, FC, Dispatch, SetStateAction } from "react";

type Props = {
  children: ReactNode;
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const Modal: FC<Props> = (props) => {
  return (
    <div className="fixed top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30">
      <div
        onClick={() => props.setIsOpen(false)}
        className="fixed top-2 border-2 border-black rounded-full flex justify-center items-center font-bold cursor-pointer w-7 h-7 right-2"
      >
        X
      </div>
      <div className="bg-white p-5 w-72 text-center rounded-md">
        {props.children}
      </div>
    </div>
  );
};
