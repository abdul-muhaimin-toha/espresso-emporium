import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <section className="sticky left-0 top-0 z-50 bg-navbar-background bg-cover bg-center">
      <div className="mx-auto  max-w-screen-2xl px-4 md:px-24">
        <nav>
          <div className="flex items-center justify-center gap-4 py-2">
            <img src={logo} alt="Espresso Emporium Logo" className="max-h-16" />
            <h2 className="font-serif text-4xl text-white">
              Espresso Emporium
            </h2>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
