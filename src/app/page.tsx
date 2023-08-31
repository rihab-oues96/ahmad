import Cover from "@/sections/Cover";
import ArticleGroupe from "@/components/ArticleGroup";
import Service from "@/layout/Service";
import OurProducts from "@/sections/OurProducts";
import RoomsInspiration from "@/sections/RoomsInspiration";
export default function Home() {
  return (
    <main>
      <Cover />
      <ArticleGroupe />
      {/* <Service /> */}
      <OurProducts />
      <RoomsInspiration />
    </main>
  );
}
