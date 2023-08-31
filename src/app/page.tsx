import Cover from "@/components/Cover";
import ArticleGroupe from "@/components/ArticleGroup";
import Product from "@/components/Product";
import Service from "@/layout/Service";
export default function Home() {
  return (
    <main>
      <Cover />
      <ArticleGroupe />
      <Service />
      {/*  <Product /> */}
    </main>
  );
}
