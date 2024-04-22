import GoBackHome from "../Components/GoBackHome";
import SingleCoffeeDetails from "../Components/SingleCoffeeDetails";

const CoffeeDetailsPage = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <GoBackHome />
        <SingleCoffeeDetails />
      </div>
    </section>
  );
};

export default CoffeeDetailsPage;
