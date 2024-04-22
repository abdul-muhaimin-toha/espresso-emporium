import GoBackHome from "../Components/GoBackHome";
import UpdateCoffee from "../Components/UpdateCoffee";

const EditCoffeePage = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <GoBackHome />
        <UpdateCoffee />
      </div>
    </section>
  );
};

export default EditCoffeePage;
