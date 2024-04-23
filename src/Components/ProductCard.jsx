import { AiOutlineEye, AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import productImage from "../assets/product-image-fallback.png";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ProductCard = ({ coffee, refetch }) => {
  const { _id, name, supplier, category, photoURL } = coffee;

  const handleDeleteCoffee = () => {
    const id = _id;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="flex flex-col items-center bg-[#eceae38f] p-10 shadow-md">
      <div className="flex items-center justify-center">
        <img src={photoURL || productImage} alt="Product Image" />
      </div>
      <div className="flex flex-grow flex-col items-center text-center">
        <h4 className="mb-3 text-xl">{supplier}</h4>
        <h3 className="mb-2 font-serif text-5xl lg:text-6xl">{name}</h3>
        <p className="text-2xl font-bold">{category}</p>
      </div>
      <div className="mt-8 flex gap-3 text-xl text-dark">
        <Link
          to={`/coffee-details/${_id}`}
          className="rounded-sm border border-dark bg-primary p-2"
        >
          <AiOutlineEye />
        </Link>
        <Link
          to={`/coffee-edit/${_id}`}
          className="rounded-sm border border-primary bg-dark p-2 text-white"
        >
          <AiTwotoneEdit />
        </Link>
        <button
          onClick={handleDeleteCoffee}
          className="rounded-sm border border-dark bg-primary p-2"
        >
          <AiTwotoneDelete />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
