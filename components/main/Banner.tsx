import Image from "next/image";
import Container from "../Container";
import { LiaBedSolid } from "react-icons/lia";
import SearchBar from "./SearchBar";

const MainPage = () => {
  return (
    <>
      <div className="w-full h-[400px] relative">
        <Image
          src={"/bgBookingBanner.jpeg"}
          alt="Banner"
          fill
          className="object-cover"
        />
        <Container>
          <div className="flex flex-col absolute gap-4 top-28 text-white">
            <h1 className=" text-5xl font-bold">Your cosiest holiday ever</h1>
            <p className=" text-3xl">Discover cabins, holiday homes and more</p>
            <button
              type="button"
              className="bg-blue-700 max-w-max p-5 rounded-md "
            >
              Explore holiday rentals
            </button>
          </div>
          <div>
            <SearchBar />
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainPage;
