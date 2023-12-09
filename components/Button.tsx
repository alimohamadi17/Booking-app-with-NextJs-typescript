import { ButtonProps } from "@/types/type";

export const Button = ({
  width,
  height,
  background,
  font,
  children,
  handleSearch,
}: ButtonProps) => {
  return (
    <button
      onClick={handleSearch}
      className={`w-${width} h-${height} bg-${background} font-${font} md:w-1/6 rounded-md  text-white  text-center`}
    >
      {children}
    </button>
  );
};
