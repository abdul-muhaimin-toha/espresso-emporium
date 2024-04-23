import { useLoaderData } from "react-router-dom";
import GoBackHome from "../Components/GoBackHome";
import UpdateCoffee from "../Components/UpdateCoffee";

const EditCoffeePage = () => {
  const coffee = useLoaderData();
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <GoBackHome />
        <UpdateCoffee coffee={coffee} />
      </div>
    </section>
  );
};

export default EditCoffeePage;
