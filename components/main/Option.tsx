import { OptionProps } from "@/types/type";

interface OptionsProps {
  option: OptionProps;
  handleOption: (name: keyof OptionProps, operation: string) => void;
}

const Option = (props: OptionsProps) => {
  return (
    <>
      <div className="flex flex-col shadow-2xl p-5  gap-y-5 rounded-md absolute bg-white top-20 left-0 w-[300px] ">
        <div className="flex items-center justify-between  ">
          <span>adult</span>
          <div className="flex gap-x-2 items-center justify-center ">
            <button
              type="button"
              disabled={props.option.adult <= 1}
              className="px-2 bg-gray-50 border-2 border-gray-200 disabled:cursor-not-allowed"
              onClick={() => props.handleOption("adult", "decrease")}
            >
              -
            </button>
            <span>{props.option.adult}</span>
            <button
              type="button"
              className="px-2 bg-gray-50 border-2 border-gray-200"
              onClick={() => props.handleOption("adult", "increase")}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span>children</span>
          <div className="flex gap-x-2 items-center justify-center ">
            <button
              type="button"
              disabled={props.option.children <= 0}
              className="px-2 bg-gray-50 border-2 border-gray-200 disabled:cursor-not-allowed"
              onClick={() => props.handleOption("children", "decrease")}
            >
              -
            </button>
            <span>{props.option.children}</span>
            <button
              type="button"
              className="px-2 bg-gray-50 border-2 border-gray-200"
              onClick={() => props.handleOption("children", "increase")}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span>room</span>
          <div className="flex gap-x-2 items-center justify-center">
            <button
              type="button"
              disabled={props.option.room <= 1}
              className="px-2 bg-gray-50 border-2 border-gray-200 disabled:cursor-not-allowed"
              onClick={() => props.handleOption("room", "decrease")}
            >
              -
            </button>
            <span>{props.option.room}</span>
            <button
              type="button"
              className="px-2 bg-gray-50 border-2 border-gray-200"
              onClick={() => props.handleOption("room", "increase")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Option;
