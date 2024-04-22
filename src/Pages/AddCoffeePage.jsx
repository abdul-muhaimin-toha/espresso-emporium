import AddCoffee from "../Components/AddCoffee";
import GoBackHome from "../Components/GoBackHome";

const AddCoffeePage = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <GoBackHome />
        <AddCoffee />
      </div>
    </section>
  );
};

export default AddCoffeePage;
