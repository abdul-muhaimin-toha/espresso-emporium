import { useLoaderData } from "react-router-dom";
import Hero from "../Components/Hero";
import Instagram from "../Components/Instagram";
import OurOfferings from "../Components/OurOfferings";
import PopularProducts from "../Components/PopularProducts";

const HomePage = () => {
  const coffees = useLoaderData();

  return (
    <>
      <Hero />
      <OurOfferings />
      <PopularProducts coffees={coffees} />
      <Instagram />
    </>
  );
};

export default HomePage;
