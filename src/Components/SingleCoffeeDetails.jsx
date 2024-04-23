import productImage from "../assets/product-image-fallback.png";

const SingleCoffeeDetails = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photoURL } =
    coffee || {};

  return (
    <div className="mb-10 flex flex-col items-center bg-primary-light px-8 py-10 md:flex-row">
      <div className="flex w-full items-center  justify-center md:w-1/2">
        <img
          src={photoURL || productImage}
          alt="Coffe Image"
          className="w-80"
        />
      </div>
      <div className="flex w-full flex-col gap-3 text-center md:w-1/2 md:text-left">
        <h3 className="mb-2 font-serif text-4xl">{name}</h3>
        <p>
          <span className="font-bold">Name:</span> {name}
        </p>
        <p>
          <span className="font-bold">Quantity Available:</span> {quantity}
        </p>
        <p>
          <span className="font-bold">Supplier:</span> {supplier}
        </p>
        <p>
          <span className="font-bold">Taste:</span> {taste}
        </p>
        <p>
          <span className="font-bold">Category:</span> {category}
        </p>
        <p>
          <span className="font-bold">Details:</span> {details}
        </p>
      </div>
    </div>
  );
};

export default SingleCoffeeDetails;
