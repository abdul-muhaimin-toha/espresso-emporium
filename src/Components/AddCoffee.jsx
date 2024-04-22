const AddCoffee = () => {
  return (
    <div className="mb-10 justify-center bg-primary-light px-6 py-10 md:px-10 md:py-14 lg:px-16 lg:py-10 ">
      <h2 className="mb-14 text-center font-serif text-5xl">Add New Coffee</h2>
      <form className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
        <div>
          <h4 className="text-md mb-2 font-bold">Name</h4>
          <input type="text" className="w-full p-3" placeholder="Name" />
        </div>
        <div>
          <h4 className="text-md mb-2 font-bold">Quantity</h4>
          <input type="text" className="w-full p-3" placeholder="Quantity" />
        </div>
        <div>
          <h4 className="text-md mb-2 font-bold">Supplier</h4>
          <input type="text" className="w-full p-3" placeholder="Supplier" />
        </div>
        <div>
          <h4 className="text-md mb-2 font-bold">Taste</h4>
          <input type="text" className="w-full p-3" placeholder="Taste" />
        </div>
        <div>
          <h4 className="text-md mb-2 font-bold">Category</h4>
          <input type="text" className="w-full p-3" placeholder="Category" />
        </div>
        <div>
          <h4 className="text-md mb-2 font-bold">Details</h4>
          <input type="text" className="w-full p-3" placeholder="Details" />
        </div>
        <div className="md:col-span-2">
          <h4 className="text-md mb-2 font-bold">Photo URL</h4>
          <input type="text" className="w-full p-3" placeholder="Photo URL" />
        </div>
        <div className="md:col-span-2">
          <input
            type="submit"
            value="Add Coffee"
            className="w-full border border-dark bg-primary p-3 font-serif text-xl"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
