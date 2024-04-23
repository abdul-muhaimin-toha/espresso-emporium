const SectionHeader = ({ heading, subHeading }) => {
  return (
    <section className="mt-20 flex flex-col text-center text-dark md:mt-44">
      <h3 className="mb-3 text-xl font-semibold text-primary">{subHeading}</h3>
      <h2 className="font-serif  text-5xl md:text-6xl ">{heading}</h2>
    </section>
  );
};

export default SectionHeader;
