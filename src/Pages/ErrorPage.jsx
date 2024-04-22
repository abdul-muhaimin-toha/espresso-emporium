import GoBackHome from "../Components/GoBackHome";
import errorImage from "../assets/404.gif";

const ErrorPage = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <GoBackHome />
        <div className="flex items-center justify-center">
          <img src={errorImage} alt="Error Image" />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
