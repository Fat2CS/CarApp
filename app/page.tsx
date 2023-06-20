import Image from "next/image";
import Hero from "../components/Hero";
import { CustomFilter, SearchBar } from "@/components";
import { fetchImage } from "@/utils";

export default async function Home() {
  const allImage = await fetchImage();

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Explore nos Oeuvres</h1>
          <p> Trouve l'oeuvre de tes rêves</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            {/* <CustomFilter title="qualitydesign" />
            <CustomFilter title="year" /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
