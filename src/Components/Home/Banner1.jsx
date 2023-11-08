import { Link } from "react-router-dom";
import banner from "../../assets/Image/tech-planet.jpg";
const Banner1 = () => {
  return (
    <div
      className="hero relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="flex flex-col md:flex-row container mx-auto items-center pt-20">
        <div className="w-full md:w-1/2 text-center md:text-left md:pr-8 mb-4 md:mb-0">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold  text-white">
            Discover Your Next Freelance Project{" "}
            <span className="text-blue-500">with FreelanceBD</span>
          </h1>
          <p className="font-medium mb-6 text-white">
            Find talented freelancers or get your project done by skilled
            professionals. Explore a world of endless possibilities.
          </p>
          <Link
            to="/register"
            className="btn bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full inline-block"
          >
            Contact Us
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img src={"https://i.ibb.co/pzvgTNx/man3.png"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
