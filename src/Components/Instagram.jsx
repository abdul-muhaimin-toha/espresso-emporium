import SectionHeader from "./SectionHeader";
import cupImage1 from "../assets/cup-1.png";
import cupImage2 from "../assets/cup-2.png";
import cupImage3 from "../assets/cup-3.png";
import cupImage4 from "../assets/cup-4.png";
import cupImage5 from "../assets/cup-5.png";
import cupImage6 from "../assets/cup-6.png";
import cupImage7 from "../assets/cup-7.png";
import cupImage8 from "../assets/cup-8.png";

const Instagram = () => {
  return (
    <section id="instagram-showcase">
      <div className="mx-auto max-w-screen-2xl px-4 ">
        <SectionHeader
          heading="Follow on Instagram"
          subHeading="--- Follow Us Now ---"
        />
        <div className="mb-10 mt-16 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-2 lg:grid-cols-4">
          <img src={cupImage1} alt="cup image" className="w-full" />
          <img src={cupImage2} alt="cup image" className="w-full" />
          <img src={cupImage3} alt="cup image" className="w-full" />
          <img src={cupImage4} alt="cup image" className="w-full" />
          <img src={cupImage5} alt="cup image" className="w-full" />
          <img src={cupImage6} alt="cup image" className="w-full" />
          <img src={cupImage7} alt="cup image" className="w-full" />
          <img src={cupImage8} alt="cup image" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Instagram;
