import { useLoaderData, useParams } from "react-router-dom";
import GoBackHome from "../Components/GoBackHome";
import SingleCoffeeDetails from "../Components/SingleCoffeeDetails";
import UseSingleCoffee from "../hooks/UseSingleCoffee";

const CoffeeDetailsPage = () => {
  const { id } = useParams();
  const { data } = UseSingleCoffee(id);

  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <GoBackHome />
        <SingleCoffeeDetails coffee={data} />
      </div>
    </section>
  );
};

export default CoffeeDetailsPage;
