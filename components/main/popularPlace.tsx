"use client";
import Image from "next/image";
import Container from "../Container";

const PopularPlace = () => {
  return (
    <Container>
      <div>
        <div className="flex flex-col pt-10 pb-10">
          <h1 className=" text-3xl font-semibold">Trending destinations</h1>
          <p>Most popular choices for travellers from Germany</p>
        </div>
        <div className="flex flex-col  w-full items-center justify-center md:flex-row  gap-6 pb-4  ">
          <div className=" flex-1  h-80">
            <Image
              width={300}
              height={0}
              src={"/berlin.jpg"}
              alt={"berlin banner"}
              className="object-cover w-full h-full  rounded-lg"
            />
          </div>
          <div className=" flex-1  h-80">
            <Image
              width={300}
              height={0}
              src={"/hamburg.jpg"}
              alt={"berlin banner"}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-6 w-full h-[300px]">
          {" "}
          <Image
            src={"/hamburg.jpg"}
            width={150}
            height={0}
            alt={"berlin banner"}
            className="object-cover w-full h-full rounded-lg"
          />{" "}
          <Image
            src={"/hamburg.jpg"}
            width={150}
            height={0}
            alt={"berlin banner"}
            className="object-cover w-full h-full rounded-lg"
          />{" "}
          <Image
            src={"/hamburg.jpg"}
            width={150}
            height={0}
            alt={"berlin banner"}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </Container>
  );
};

export default PopularPlace;
