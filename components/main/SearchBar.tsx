"use client";

import { useState, useCallback } from "react";
import { LiaBedSolid } from "react-icons/lia";
import Container from "../Container";

import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Option from "./Option";
import { OptionProps } from "@/types/type";
import { Button } from "../Button";

const SearchBar = () => {
  const { push } = useRouter();

  const [openDate, setOpenDate] = useState<boolean>(false);
  const [openOption, setOpenOption] = useState<boolean>(false);
  const [option, setOption] = useState<OptionProps>({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [date, setDate] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOpenDate = useCallback(() => {
    setOpenDate(!openDate);
    setOpenOption(false);
  }, [openDate, openOption]);

  const handleOpenOptions = useCallback(() => {
    setOpenOption(!openOption);
    setOpenDate(false);
  }, [openDate, openOption]);

  //handle event for increase or decrease room , adult and children
  const handleOption = useCallback(
    (name: keyof OptionProps, operation: string) => {
      setOption((prev) => ({
        ...prev,
        [name]: operation === "increase" ? option[name] + 1 : option[name] - 1,
      }));
    },
    [option.adult, option.children, option.room]
  );

  const handleSearch = () => {
    const startDate = format(date[0].startDate, "MM/dd/yyyy");

    const endDate = format(date[0].endDate, "MM/dd/yyyy");

    push(
      `/hotel?checkin=${startDate}&checkout=${endDate}&adult=${option.adult}&children=${option.children}&room=${option.room}`
    );
  };

  return (
    <>
      <Container>
        <div
          className="flex flex-col 
            items-center justify-center
          h-[80px]
          md:flex-row 
          w-full xl:max-w-6xl lg:max-w-4xl md:max-w-3xl
          
          absolute -bottom-40 md:-bottom-10 right-0 md:right-10 left-0 md:left-24
          border-8 border-orange-400 bg-orange-400 space-x-1
          rounded-xl"
        >
          <div className="flex items-center p-5 h-full w-full text-gray-500 md:w-1/3 bg-white  rounded-md ">
            <LiaBedSolid size={28} />
            <input
              type="text"
              name=""
              placeholder="Where are you going?"
              className=" rounded-md  outline-none pl-2 placeholder:text-gray-500 text-md font-semibold "
            />
          </div>
          <div className="bg-white flex items-center gap-x-2 relative p-3 w-full md:w-1/3  h-full  rounded-md text-gray-500 font-semibold text-md">
            <FaRegCalendarAlt size={24} />
            <span onClick={handleOpenDate} className=" cursor-pointer">
              {`${format(date[0].startDate, "MM/dd/yyyy")} - ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )} `}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className=" absolute top-20  z-10 -left-0"
              />
            )}
          </div>
          <div className="bg-white relative p-3 flex items-center gap-x-2 h-full w-1/3   rounded-md  font-semibold text-gray-500 text-sm ">
            <BsPersonFillAdd size={26} />
            <span
              onClick={handleOpenOptions}
              className=" cursor-pointer"
            >{`${option.adult} adult . ${option.children} children . ${option.room} room`}</span>

            {/* OPTIONS FOR INCREASE OR DECREASE ROOM,ADULT,CHILDREN */}
            {openOption && (
              <Option option={option} handleOption={handleOption} />
            )}
          </div>

          <Button
            handleSearch={handleSearch}
            width="full"
            height="full"
            background="blue-600"
            font="semibold"
          >
            Search
          </Button>
        </div>
      </Container>
    </>
  );
};

export default SearchBar;
