import productImage from "../assets/product-image-fallback.png";

const SingleCoffeeDetails = () => {
  return (
    <div className="mb-10 flex flex-col items-center bg-primary-light px-8 py-10 md:flex-row">
      <div className="flex w-full items-center  justify-center md:w-1/2">
        <img src={productImage} alt="Coffe Image" className="w-80" />
      </div>
      <div className="flex w-full flex-col gap-3 text-center md:w-1/2 md:text-left">
        <h3 className="mb-2 font-serif text-4xl">Niceties</h3>
        <p>
          <span className="font-bold">Name:</span> Americano Coffee
        </p>
        <p>
          <span className="font-bold">Chef:</span> Mr. Matin Paul
        </p>
        <p>
          <span className="font-bold">Supplier:</span> Cappu Authorizer
        </p>
        <p>
          <span className="font-bold">Taste:</span> Sweet and hot
        </p>
        <p>
          <span className="font-bold">Category:</span> Americano
        </p>
        <p>
          <span className="font-bold">Details:</span> Espresso with hot water
        </p>
      </div>
    </div>
  );
};

export default SingleCoffeeDetails;
