import { routes } from "@/constant/data";
import Link from "next/link";
import Container from "./Container";

const Navbar = () => {
  return (
    <>
      <div className=" bg-blue-800 flex flex-col">
        <Container>
          <div className="flex items-center justify-between pb-5">
            <div className="text-white text-2xl font-bold">BOOKING.COM</div>
            <div className="flex items-center gap-2 font-semibold">
              <button
                type="button"
                className="border-2 border-blue-400 text-blue-600 bg-white p-2 px-3 rounded-md"
              >
                Register
              </button>{" "}
              <button
                type="button"
                className="border-2 border-blue-400 text-blue-600 bg-white p-2 px-3 rounded-md"
              >
                Sign in
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6 text-white">
            {routes.map((route) => (
              <div key={route.id} className="flex items-center gap-1 ">
                <span className=" text-2xl pr-1">{route.icon}</span>{" "}
                <Link href={route.href}>{route.label}</Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
