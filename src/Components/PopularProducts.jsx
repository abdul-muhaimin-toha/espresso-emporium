import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import coffeIcon from "../assets/service-1.png";

const PopularProducts = () => {
  return (
    <section>
      <div className="mx-auto mb-10 max-w-screen-2xl px-4 md:mb-16">
        <SectionHeader
          heading="Our Popular Products"
          subHeading="--- Sip & Savor ---"
        />
        <div className="mb-10 mt-10 flex items-center justify-center">
          <button className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 font-serif text-lg text-white">
            <p>Add Coffee</p>
            <img src={coffeIcon} alt="Icon of Coffee" className="w-8" />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
