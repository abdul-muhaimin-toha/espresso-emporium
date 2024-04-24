import Swal from "sweetalert2";

const UpdateCoffee = ({ coffee, refetch }) => {
  const { _id, name, quantity, supplier, taste, category, details, photoURL } =
    coffee || {};

  const handleUplateCoffee = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photoURL = e.target.photoURL.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };

    fetch(
      `https://espresso-emporium-server-ozq97bwzn.vercel.app/coffees/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "You coffee updated successfully!",
            icon: "success",
          });
          refetch();
        }
      });
  };

  return (
    <div className="mb-10 justify-center bg-primary-light px-6 py-10 md:px-10 md:py-14 lg:px-16 lg:py-10 ">
      <h2 className="mb-14 text-center font-serif text-5xl">Update {name}</h2>
      <form
        onSubmit={handleUplateCoffee}
        className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2"
      >
        <div>
          <h4 className="text-md mb-2 font-bold">Name</h4>
          <input
            type="text"
            className="w-full p-3"
            placeholder="Name"
            defaultValue={name}
            name="name"
          />
        </div>
        <div>
          <h4 className="text-md mb-2 font-bold">Quantity</h4>
          <input
            type="text"
            className="w-full p-3"
            placeholder="Quantity"
            defaultValue={quantity}
            name="quantity"
          />
        </div>
        <div>
          <h4 className="text-md mb-2 font-bold">Supplier</h4>
          <input
            type="text"
            className="w-full p-3"
            placeholder="Supplier"
            defaultValue={supplier}
            name="supplier"
          />
        </div>
        <div>
          <h4 className="text-md mb-2 font-bold">Taste</h4>
          <input
            type="text"
            className="w-full p-3"
            placeholder="Taste"
            defaultValue={taste}
            name="taste"
          />
        </div>
        <div>
          <h4 className="text-md mb-2 font-bold">Category</h4>
          <input
            type="text"
            className="w-full p-3"
            placeholder="Category"
            defaultValue={category}
            name="category"
          />
        </div>
        <div>
          <h4 className="text-md mb-2 font-bold">Details</h4>
          <input
            type="text"
            className="w-full p-3"
            placeholder="Details"
            defaultValue={details}
            name="details"
          />
        </div>
        <div className="md:col-span-2">
          <h4 className="text-md mb-2 font-bold">Photo URL</h4>
          <input
            type="text"
            className="w-full p-3"
            placeholder="Photo URL"
            defaultValue={photoURL}
            name="photoURL"
          />
        </div>
        <div className="md:col-span-2">
          <input
            type="submit"
            value="Update Coffee Details"
            className="w-full cursor-pointer border border-dark bg-primary p-3 font-serif text-xl"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
