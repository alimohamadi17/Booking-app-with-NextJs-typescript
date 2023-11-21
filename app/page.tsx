import MainPage from "@/components/main/Banner";
import PopularPlace from "@/components/main/popularPlace";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <MainPage />
      <PopularPlace />
    </main>
  );
}
