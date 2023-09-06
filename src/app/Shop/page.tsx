import Service from "@/layout/Service";
import PageCover from "@/sections/PageCover";
import ShopFilter from "@/components/ShopFilter";

const Shop = () => {
  return (
    <main>
      <PageCover pageName="Shop" />
      <ShopFilter />
      {/* <Service /> */}
    </main>
  );
};

export default Shop;
