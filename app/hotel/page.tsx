"use client";
import { format } from "date-fns";
import React from "react";

const HomePage = ({ searchParams }: { searchParams: string | any }) => {
  const { adult, children, room } = searchParams;
  const date = searchParams.date;

  return (
    <div>
      adult:{adult}children:{children}room:{room}
      <br />
      {date}
    </div>
  );
};

export default HomePage;
