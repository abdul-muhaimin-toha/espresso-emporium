import { useLoaderData } from "react-router-dom";
import GoBackHome from "../Components/GoBackHome";
import SingleCoffeeDetails from "../Components/SingleCoffeeDetails";

const CoffeeDetailsPage = () => {
  const coffee = useLoaderData();

  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <GoBackHome />
        <SingleCoffeeDetails coffee={coffee} />
      </div>
    </section>
  );
};

export default CoffeeDetailsPage;
