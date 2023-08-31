import Cover from "@/sections/Cover";
import BrowseTheRange from "@/sections/BrowseTheRange";
import Service from "@/layout/Service";
import OurProducts from "@/sections/OurProducts";
import RoomsInspiration from "@/sections/RoomsInspiration";
export default function Home() {
  return (
    <main>
      <Cover />
      <BrowseTheRange />
      {/* <Service /> */}
      <OurProducts />
      <RoomsInspiration />
    </main>
  );
}
