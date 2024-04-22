import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const GoBackHome = () => {
  return (
    <Link to="/" className="my-10  flex items-center gap-2 text-2xl">
      <IoIosArrowRoundBack />
      <p className="font-serif text-3xl">Back to home</p>
    </Link>
  );
};

export default GoBackHome;
