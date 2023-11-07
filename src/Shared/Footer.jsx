import logo from "../assets/Image/Logo-name.png";
import logo1 from "../assets/Image/logo.png";
const Footer = () => {
  return (
    <footer className="text-white bg-gray-900">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-10 justify-center md:justify-between py-20">
        <div className="">
          <img src={logo} alt="Logo" className="w-36 mb-4" />
          <p className="text-gray-400">
            Your New Company Name.
            <br />
            Delivering exceptional services since 20XX
          </p>
        </div>

          <div className="">
            <h2 className="text-lg font-semibold mb-2 text-gray-400">
              Address
            </h2>
            <p>1234 Elm Street, Springfield, IL 62701, USA</p>
            <p>Email: example@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>

          {/* Services */}
          <div className="">
            <h2 className="text-lg font-semibold mb-2 text-gray-400">
              Services
            </h2>
            <ul className="list-disc list-inside">
              <li className="text-white hover:text-blue-500 transition duration-300 mb-2">
                Web Design
              </li>
              <li className="text-white hover:text-blue-500 transition duration-300 mb-2">
                Digital Marketing
              </li>
              <li className="text-white hover:text-blue-500 transition duration-300 mb-2">
                Graphic Design
              </li>
              <li className="text-white hover:text-blue-500 transition duration-300">
                Advertisement
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="w-full">
            <h2 className="text-lg font-semibold mb-2 text-gray-400">
              Company
            </h2>
            <ul className="list-disc list-inside">
              <li className="text-white hover:text-blue-500 transition duration-300 mb-2">
                About us
              </li>
              <li className="text-white hover:text-blue-500 transition duration-300 mb-2">
                Contact
              </li>
              <li className="text-white hover:text-blue-500 transition duration-300 mb-2">
                Jobs
              </li>
              <li className="text-white hover:text-blue-500 transition duration-300">
                Press kit
              </li>
            </ul>
          </div>

      </div>
      <div className="bg-gray-700 text-gray-300 ">
        <div className="flex items-center justify-center gap-5 p-4 container mx-auto">
          <img src={logo1} alt="" className="w-10" />
          <p>Copyright © 2023 - All right reserved FreelanceBD</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
