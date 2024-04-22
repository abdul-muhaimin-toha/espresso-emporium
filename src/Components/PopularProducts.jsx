import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import coffeIcon from "../assets/service-1.png";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  return (
    <section>
      <div className="mx-auto  max-w-screen-2xl px-4 ">
        <SectionHeader
          heading="Our Popular Products"
          subHeading="--- Sip & Savor ---"
        />
        <div className="mb-10 mt-10 flex items-center justify-center">
          <Link
            to="/coffee-add-new"
            className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 font-serif text-lg text-white"
          >
            <p>Add Coffee</p>
            <img src={coffeIcon} alt="Icon of Coffee" className="w-8" />
          </Link>
        </div>
        <div className="mb-10 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-2 lg:grid-cols-3">
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
