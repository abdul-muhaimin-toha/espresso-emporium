const Hero = () => {
  return (
    <section>
      <div className="bg-hero-background hero min-h-[calc(100vh-80px)]">
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-white ">
          <div className="max-w-3xl">
            <h1 className="mb-4 font-serif text-6xl">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-6 text-base">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="text-dark rounded-sm bg-primary px-4 py-2 font-serif text-2xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
