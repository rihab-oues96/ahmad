import Service from "@/layout/Service";
import PageCover from "@/sections/PageCover";
import ShopFilter from "@/components/ShopFilter";
import OurProducts from "@/sections/OurProducts";

const Shop = () => {
  return (
    <main>
      <PageCover pageName="Shop" />
      <ShopFilter />
      <OurProducts />
      <Service />
    </main>
  );
};

export default Shop;
