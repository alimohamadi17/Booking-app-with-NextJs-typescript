"use client";

import Container from "@/components/Container";
import Option from "@/components/main/Option";
import { HomePageProps } from "@/types/type";

const HomePage = ({ searchParams }: { searchParams: HomePageProps }) => {
  const { adult, children, room, checkout, checkin } = searchParams;

  const information = `adult:${adult}children:${children}room:${room}`;

  return (
    <>
      {/* adult:{adult}children:{children}room:{room}
      <br />
      {date} */}
      <Container>
        <div className="flex gap-2 w-full ">
          <div className="flex-1 bg-yellow-400 py-5 px-4 space-y-3  rounded-lg">
            <h1 className="font-bold text-2xl">Search</h1>
            <div>
              <p className="text-sm"> Destination/property name:</p>
              <input type="text" placeholder="location" />
            </div>
            <div>
              <p className="text-sm"> Check-in date</p>
              <input type="text" placeholder="date" value={checkin} />
            </div>

            <div>
              <p className="text-sm"> Check-out date</p>
              <input type="text" placeholder="date" value={checkout} />
            </div>
            <div>
              <p className="text-sm">information</p>
              <input type="text" placeholder="date" value={information} />
            </div>
          </div>
          {/* INFORMATION */}
          <div className="flex-2 bg-red-500 px-10 py-5 rounded-t-lg">
            <h1>
              Netherlands: 7,324 properties found Get inspiration for your next
              trip
            </h1>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              autem neque unde cum quidem assumenda, dolores nostrum? Officiis,
              eaque! Nostrum deleniti esse aliquam labore consequatur, ratione
              aperiam repudiandae voluptatem blanditiis.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              atque illo at expedita maiores, laudantium, natus beatae mollitia
              ea provident eum facere quas deserunt rerum quae placeat. Porro,
              ad quidem.
            </div>
            <div>Ali</div>
            <div>Ali</div>
            <div>Ali</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
