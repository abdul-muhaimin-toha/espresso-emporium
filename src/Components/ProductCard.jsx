import { AiOutlineEye, AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import productImage from "../assets/product-image-fallback.png";

const ProductCard = () => {
  return (
    <div className="flex flex-col items-center bg-[#eceae38f] p-10 shadow-md">
      <div className="flex items-center justify-center">
        <img src={productImage} alt="Product Image" />
      </div>
      <div className="flex flex-grow flex-col items-center text-center">
        <h4 className="mb-3 text-xl">Nestle</h4>
        <h3 className="mb-2 font-serif text-5xl lg:text-6xl">
          Americano Coffee
        </h3>
        <p className="text-2xl font-bold">890 Taka</p>
      </div>
      <div className="mt-8 flex gap-3 text-xl text-dark">
        <button className="rounded-sm border border-dark bg-primary p-2">
          <AiOutlineEye />
        </button>
        <button className="rounded-sm border border-primary bg-dark p-2 text-white">
          <AiTwotoneEdit />
        </button>
        <button className="rounded-sm border border-dark bg-primary p-2">
          <AiTwotoneDelete />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
