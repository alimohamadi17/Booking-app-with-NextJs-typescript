import { FaBed } from "react-icons/fa";
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { BsFillCarFrontFill } from "react-icons/bs";
import { MdOutlineAttractions } from "react-icons/md";
import { BiSolidCarGarage } from "react-icons/bi";
import { TbWorldShare } from "react-icons/tb";

export const routes = [
  { id: "1", label: "Stays", icon: <FaBed />, href: "/stays" },
  {
    id: "2",
    label: "Flights",
    icon: <PiAirplaneInFlightFill />,
    href: "/flights",
  },
  {
    id: "3",
    label: "Flight+hotel",
    icon: <TbWorldShare />,
    href: "/flight-hotel",
  },
  {
    id: "4",
    label: "Car rental",
    icon: <BsFillCarFrontFill />,
    href: "/car-rental",
  },
  {
    id: "5",
    label: "Attractions",
    icon: <MdOutlineAttractions />,
    href: "/attractions",
  },
  {
    id: "6",
    label: "Airport Taxi",
    icon: <BiSolidCarGarage />,
    href: "/airport-Taxi",
  },
];
