import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <section className="sticky left-0 top-0 z-50">
      <nav className="bg-navbar-background bg-cover">
        <div className="flex items-center justify-center gap-4 py-2">
          <img src={logo} alt="Espresso Emporium Logo" className="max-h-16" />
          <h2 className="font-serif text-4xl text-white">Espresso Emporium</h2>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
