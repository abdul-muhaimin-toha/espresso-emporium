import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <section>
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
