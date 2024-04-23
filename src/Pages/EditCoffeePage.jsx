import { useParams } from "react-router-dom";
import GoBackHome from "../Components/GoBackHome";
import UpdateCoffee from "../Components/UpdateCoffee";
import UseSingleCoffee from "../hooks/UseSingleCoffee";

const EditCoffeePage = () => {
  const { id } = useParams();
  const { data, refetch } = UseSingleCoffee(id);

  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <GoBackHome />
        <UpdateCoffee coffee={data} refetch={refetch} />
      </div>
    </section>
  );
};

export default EditCoffeePage;
