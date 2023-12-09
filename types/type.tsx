export interface OptionProps {
  adult: number;
  children: number;
  room: number;
}

export interface ButtonProps {
  width: string | number;
  height: string;
  font: string;
  background: string;
  children: React.ReactNode;
  handleSearch: () => void;
}

export interface HomePageProps {
  adult: string;
  children: string;
  room: string;
  checkout: string;
  checkin: string;
}
