import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <section className="sticky left-0 top-0 z-50 bg-navbar-background bg-cover bg-center">
      <div className="mx-auto max-w-screen-2xl px-4">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center justify-center gap-1 py-2 md:gap-4"
          >
            <img
              src={logo}
              alt="Espresso Emporium Logo"
              className="h-12 md:max-h-16"
            />
            <h2 className="font-serif text-xl text-white md:text-4xl">
              Espresso Emporium
            </h2>
          </Link>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/log-in"
              className="rounded-sm bg-primary px-2 py-1 font-serif text-xl text-dark md:px-3 md:py-2"
            >
              Join Now
            </Link>
            <Link
              to="/users-DB"
              className="rounded-sm bg-primary px-2 py-1 font-serif text-xl text-dark md:px-3 md:py-2"
            >
              UsersDB
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
