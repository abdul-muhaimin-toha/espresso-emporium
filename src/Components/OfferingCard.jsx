const OfferingCard = ({ image, heading, subHeading }) => {
  return (
    <div className="flex flex-col items-center text-center text-dark lg:items-start lg:text-left">
      <img src={image} alt="Services" className="mb-4 max-w-16" />
      <h3 className="mb-2 font-serif text-4xl">{heading}</h3>
      <p className="max-w-sm">{subHeading}</p>
    </div>
  );
};

export default OfferingCard;
