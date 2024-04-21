import services1 from "../assets/service-1.png";
import services2 from "../assets/service-2.png";
import services3 from "../assets/service-3.png";
import services4 from "../assets/service-4.png";
import OfferingCard from "./OfferingCard";

const OurOfferings = () => {
  return (
    <section className="bg-primary-light">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4 ">
          <OfferingCard
            image={services1}
            heading="Awesome Aroma"
            subHeading="You will definitely be a fan of the design & aroma of your coffee"
          />
          <OfferingCard
            image={services2}
            heading="High Quality"
            subHeading="We served the coffee to you maintaining the best quality"
          />
          <OfferingCard
            image={services3}
            heading="Pure Grades"
            subHeading="The coffee is made of the green coffee beans which you will love"
          />
          <OfferingCard
            image={services4}
            heading="Proper Roasting"
            subHeading="Your coffee is brewed by first roasting the green coffee beans"
          />
        </div>
      </div>
    </section>
  );
};

export default OurOfferings;
